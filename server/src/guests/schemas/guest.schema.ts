import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { IGuest } from '../interfaces/guest.interface'

export type GuestDocument = Guest & Document

@Schema()
export class Guest implements IGuest {
  @Prop({
    type: Object,
    required: true
  })
  metrics: IGuest['metrics']

  @Prop({
    type: Object,
    required: true
  })
  wishlist: IGuest['wishlist']

  @Prop({
    type: Object,
    required: true
  })
  viewed: IGuest['viewed']

  @Prop({
    type: Object,
    required: true
  })
  cart: IGuest['cart']
}

export const GuestSchema = SchemaFactory.createForClass(Guest)

export const GuestModelDefinition: ModelDefinition = {
  name: Guest.name,
  schema: GuestSchema
}