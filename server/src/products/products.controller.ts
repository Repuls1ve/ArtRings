import { Body, Controller, Post } from '@nestjs/common';
import { map, Observable } from 'rxjs'
import { IResponse } from 'src/common/interceptors/transform.interceptor'
import { AddProductDto } from './dtos/add-product.dto'
import { ProductsService } from './products.service'
import { ProductDocument } from './schemas/product.schema'

@Controller('products')
export class ProductsController {
  constructor(private readonly products: ProductsService) {}

  @Post('add')
  public addProduct(@Body() addProductDto: AddProductDto): Observable<IResponse<ProductDocument>> {
    return this.products.addProduct(addProductDto).pipe(
      map(data => ({data}))
    )
  }
}
