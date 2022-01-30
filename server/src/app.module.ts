import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { TransformInterceptorProvider } from './common/interceptors/transform.interceptor'
import { GuestsModule } from './guests/guests.module'
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    GuestsModule,
    ProductsModule
  ],
  providers: [
    TransformInterceptorProvider
  ],
})
export class AppModule {}
