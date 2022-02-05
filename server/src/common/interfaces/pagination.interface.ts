export interface IPaginationQuery {
  page: number
  limit: number
}

export interface IPagination {
  pagination: {
    totalItems: number
    pageItems: number
    pageSize: number
    totalPages: number
    currentPage: number
  }
}