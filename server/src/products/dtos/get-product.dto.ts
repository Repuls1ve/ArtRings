import { IsDefined, Matches } from 'class-validator'
import { ProductDocument } from '../schemas/product.schema'

export class GetProductDto {
  @IsDefined()
  @Matches(/^[0-9a-fA-F]{24}$/)
  id: ProductDocument['id']
}