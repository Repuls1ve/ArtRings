import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { ProductModelDefinition } from './schemas/product.schema'

@Module({
  imports: [MongooseModule.forFeature([ProductModelDefinition])],
  providers: [ProductsService],
  controllers: [ProductsController],
  exports: [ProductsService]
})
export class ProductsModule {}
