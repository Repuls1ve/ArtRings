import { IFilters } from '../interfaces/filters.interface'
import { IProduct } from '../models/product.model'

export interface IOption<T = any> {
  key: string
  label: string
  value: T
}

type ICatalogDescriptions = {
  [key in IProduct['category']]: string
}

type ICatalogTitles = {
  [key in IProduct['category']]: string
}

export const AllowedCategories: IProduct['category'][] = [
  'wedding-rings', 'wedding-duets', 'engagement-rings'
]

export const CatalogDescriptions: ICatalogDescriptions = {
  'wedding-rings': 'Эксклюзивные обручальные кольца с оригинальным дизайном от «Арт-Рингз» — отличный выбор для закрепления союза Вашей любви. В такой важный день все должно быть идеально и ключевой деталью являются обручальные кольца для «нее» и «него» — будущих счастливых супругов.',
  'wedding-duets': 'В магазине «Арт-Рингз» можно выбрать идеальное помолвочное кольцо, которое выразит чувства мужчины, делающего предложение руки и сердца своей любимой. Будущей невесте может посчастливиться стать обладательницей не только лучшего мужа на свете, но и изысканного колечка, выполненного из золота и украшенного бриллиантами.',
  'engagement-rings': 'В магазине «Арт-Рингз» можно выбрать идеальное помолвочное кольцо, которое выразит чувства мужчины, делающего предложение руки и сердца своей любимой. Будущей невесте может посчастливиться стать обладательницей не только лучшего мужа на свете, но и изысканного колечка, выполненного из золота и украшенного бриллиантами.'
}

export const CatalogTitles: ICatalogTitles = {
  'wedding-rings': 'Обручальные кольца',
  'wedding-duets': 'Свадебные дуэты',
  'engagement-rings': 'Помолвочные кольца'
}

export const CatalogTags: IFilters['tags'] = [
  'этно', 'отпечатки', 'бесконечность', 'однотонные',
  'эмаль', 'подвижные', 'необычные', 'широкие', 'косичка',
  'комбинированные', 'узкие', 'растительный орнамент',
  'брилланты', 'сапфиры'
]

export const CatalogSortOptions: IOption<IFilters['sorting']>[] = [
  {
    key: 'default',
    label: 'По умолчанию',
    value: undefined
  },
  {
    key: 'rating desc',
    label: 'Рейтинг (начиная с высокого)',
    value: {
      attribute: 'rating',
      order: 'desc'
    }
  },
  {
    key: 'rating asc',
    label: 'Рейтинг (начиная с низкого)',
    value: {
      attribute: 'rating',
      order: 'asc'
    }
  },
  {
    key: 'price desc',
    label: 'Цена (высокая > низкая)',
    value: {
      attribute: 'price',
      order: 'desc'
    }
  },
  {
    key: 'price asc',
    label: 'Цена (низкая > высокая)',
    value: {
      attribute: 'price',
      order: 'asc'
    }
  },
  {
    key: 'title desc',
    label: 'Название (А-Я)',
    value: {
      attribute: 'title',
      order: 'desc'
    }
  },
  {
    key: 'title asc',
    label: 'Название (Я-А)',
    value: {
      attribute: 'title',
      order: 'asc'
    }
  }
]

export const CatalogPricesOptions: IOption<IFilters['prices']>[] = [
  {
    key: 'all',
    label: 'По умолчанию',
    value: undefined
  },
  {
    key: 'lower 50 000',
    label: 'до 50 000',
    value: {
      start: 0,
      end: 50000 
    }
  },
  {
    key: 'from 50 000 to 70 000',
    label: '50-70 000',
    value: {
      start: 50000,
      end: 70000
    }
  },
  {
    key: 'from 70 000 to 100 000',
    label: '70-100 000',
    value: {
      start: 70000,
      end: 100000
    }
  },
  {
    key: 'from 100 000',
    label: 'от 100 000',
    value: {
      start: 100000,
      end: 1000000
    }
  }
]

export const CatalogInsertsOptions: IOption<IFilters['inserts']>[] = [
  {
    key: 'all',
    label: 'По умолчанию',
    value: undefined
  },
  {
    key: 'with inserts',
    label: 'с камнями',
    value: true
  },
  {
    key: 'without inserts',
    label: 'без камней',
    value: false
  }
]