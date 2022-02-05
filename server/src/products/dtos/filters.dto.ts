import { IFilters } from '../interfaces/filters.interface'

export class FiltersDto implements IFilters {
  category: IFilters['category']

  sorting: IFilters['sorting']

  prices: IFilters['prices']

  inserts: IFilters['inserts']

  tags: IFilters['tags']
}