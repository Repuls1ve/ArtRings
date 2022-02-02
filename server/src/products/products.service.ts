import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { from, Observable, of, switchMap, throwError } from 'rxjs'
import { AddProductDto } from './dtos/add-product.dto'
import { Product, ProductDocument } from './schemas/product.schema'

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private readonly product: Model<ProductDocument>) {}

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
}
