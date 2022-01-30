import { IsDefined, IsNotEmptyObject, IsObject } from 'class-validator'
import { IGuest } from '../interfaces/guest.interface'

export class UpdateWishlistDto {
  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  wishlist: IGuest['wishlist']
}