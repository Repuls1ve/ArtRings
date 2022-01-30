import { IsDefined, IsNotEmptyObject, IsObject } from 'class-validator'
import { IGuest } from '../interfaces/guest.interface'

export class UpdateCartDto {
  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  cart: IGuest['cart']
}