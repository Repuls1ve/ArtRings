import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductsModule } from 'src/products/products.module'
import { GuestsController } from './guests.controller'
import { GuestsService } from './guests.service'
import { GuestModelDefinition } from './schemas/guest.schema'

@Module({
  imports: [
  MongooseModule.forFeature([GuestModelDefinition]),
  ProductsModule
  ],
  controllers: [GuestsController],
  providers: [GuestsService],
  exports: [GuestsService]
})
export class GuestsModule {}
