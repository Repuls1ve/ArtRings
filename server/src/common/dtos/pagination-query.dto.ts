import { Type } from 'class-transformer'
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator'
import { IPaginationQuery } from '../interfaces/pagination.interface'

export class PaginationQueryDto implements IPaginationQuery {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  limit: number

  @IsNumber()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  page: number
}