import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common'
import { map, Observable } from 'rxjs'
import { FiltersDto } from 'src/products/dtos/filters.dto'
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto'
import { IResponse } from 'src/common/interceptors/transform.interceptor'
import { IPagination } from 'src/common/interfaces/pagination.interface'
import { AddProductDto } from './dtos/add-product.dto'
import { ProductsService } from './products.service'
import { ProductDocument } from './schemas/product.schema'
import { GetProductDto } from './dtos/get-product.dto'

@Controller('products')
export class ProductsController {
  constructor(private readonly products: ProductsService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  public getFilteredProducts(
    @Query() paginationQuery: PaginationQueryDto,
    @Body() filters: FiltersDto
  ): Observable<IResponse<{products: ProductDocument[]} & IPagination>> {
    return this.products.getFilteredProducts(paginationQuery, filters).pipe(
      map(data => ({data}))
    )
  }

  @Post('add')
  public addProduct(@Body() addProductDto: AddProductDto): Observable<IResponse<ProductDocument>> {
    return this.products.addProduct(addProductDto).pipe(
      map(data => ({data}))
    )
  }

  @Get('one/:id')
  public getProduct(@Param() getProductDto: GetProductDto): Observable<IResponse<ProductDocument>> {
    return this.products.getProduct(getProductDto.id).pipe(
      map(data => ({data}))
    )
  }
}