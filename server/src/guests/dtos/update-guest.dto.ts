import { IsDefined, Matches } from 'class-validator'
import { ProductDocument } from 'src/products/schemas/product.schema'

export class UpdateGuestDto {
  @IsDefined()
  @Matches(/^[0-9a-fA-F]{24}$/)
  productId: ProductDocument['id']
}