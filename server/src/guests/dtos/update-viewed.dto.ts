import { IsDefined, IsNotEmptyObject, IsObject } from 'class-validator'
import { IGuest } from '../interfaces/guest.interface'

export class UpdateViewedDto {
  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  viewed: IGuest['viewed']
}