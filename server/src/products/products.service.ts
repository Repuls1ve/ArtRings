import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, QueryOptions, UpdateQuery } from 'mongoose'
import { from, map, Observable, of, switchMap, throwError } from 'rxjs'
import { FiltersDto } from 'src/products/dtos/filters.dto'
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto'
import { IPagination } from 'src/common/interfaces/pagination.interface'
import { AddProductDto } from './dtos/add-product.dto'
import { Product, ProductDocument } from './schemas/product.schema'
import { toArray } from 'src/common/utils/data.util'
import { AddReviewDto } from './dtos/add-review.dto'

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private readonly product: Model<ProductDocument>) {}

  public getFilteredProducts(
    paginationQuery: PaginationQueryDto,
    filters: FiltersDto
  ): Observable<{products: ProductDocument[]} & IPagination> {
    const { page, limit } = paginationQuery
    const findQuery = {
      ...(filters.prices && {'price': { '$gte': filters.prices.start, '$lte': filters.prices.end }}),
      ...(filters.tags?.length && {'tags': { '$in': filters.tags }}),
      ...((filters.inserts !== undefined) && {'inserts': filters.inserts}),
      'category': filters.category
    }
    const sortQuery = filters.sorting ? { [filters.sorting.attribute]: filters.sorting.order } : {}

    return from(this.product.find(findQuery)
    .sort(sortQuery)).pipe(
      map(docs => {
        const products = toArray<ProductDocument>(docs) 
        const result = products.slice((page - 1) * limit, page * limit)
        const totalPages = Math.ceil(products.length / paginationQuery.limit)

        return {
          products: result,
          pagination: {
            totalItems: products.length,
            pageItems: result.length,
            pageSize: limit,
            totalPages: totalPages,
            currentPage: page
          }
        }
      })
    )
  }

  public getProduct(id: ProductDocument['id']): Observable<ProductDocument> {
    return from(this.product.findById(id)).pipe(
      switchMap(product => product ? of(product) :
        throwError(() => new NotFoundException('Product with provided id was not found'))
      )
    )
  }

  public addProduct(addProductDto: AddProductDto): Observable<ProductDocument> {
    return from(this.product.create(addProductDto.product))
  }

  public addReview(
    review: AddReviewDto['review'],
    id: AddReviewDto['id']
  ): Observable<ProductDocument> {
    const options: QueryOptions = { new: true }

    return from(this.getProduct(id)).pipe(
      switchMap(product => {
        product.reviews = [...product.reviews, review]
        const ratings = product.reviews.map(review => review.rating)
        const updatedRating = ratings.reduce((a, b) => a + b, 0) / ratings.length
        product.rating = updatedRating
        return from(product.save(options))
      })
    )
  }
}
