import { IsDefined, IsNotEmptyObject, IsObject, Matches } from 'class-validator'
import { IProductReview } from '../interfaces/product.interface'
import { ProductDocument } from '../schemas/product.schema'

export class AddReviewDto {
  @IsDefined()
  @Matches(/^[0-9a-fA-F]{24}$/)
  id: ProductDocument['id']

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  review: IProductReview
}