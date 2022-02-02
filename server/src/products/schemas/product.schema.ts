import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { IProduct } from '../interfaces/product.interface'

export type ProductDocument = Product & Document

@Schema()
export class Product implements IProduct {
  @Prop({
    type: String,
    required: true
  })
  identifier: IProduct['identifier']

  @Prop({
    type: String,
    required: true
  })
  description: IProduct['description']

  @Prop({
    type: Object,
    required: true
  })
  price: IProduct['price']

  @Prop({
    type: [Object],
    required: true
  })
  reviews: IProduct['reviews']

  @Prop({
    type: Object,
    required: true
  })
  sizes: IProduct['sizes']

  @Prop({
    type: [Object],
    required: true
  })
  images: IProduct['images']

  @Prop({
    type: Object
  })
  discount: IProduct['discount']

  @Prop({
    type: Date,
    required: true
  })
  production: IProduct['production']

  @Prop({
    type: String,
    required: true
  })
  material: IProduct['material']

  @Prop({
    type: Number,
    required: true
  })
  rating: IProduct['rating']

  @Prop({
    type: Boolean,
    required: true
  })
  stock: IProduct['stock']
}

export const ProductSchema = SchemaFactory.createForClass(Product)

export const ProductModelDefinition: ModelDefinition = {
  name: Product.name,
  schema: ProductSchema
}