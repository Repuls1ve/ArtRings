import { IsDefined, IsNotEmptyObject, IsObject } from 'class-validator'
import { IProduct } from '../interfaces/product.interface'

export class AddProductDto {
  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  product: IProduct
}