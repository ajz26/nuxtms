export default interface ApiListResponse<T> {
  data: T[]
  pagination: {
    total: number
    perPage: number
    currentPage: number
    totalPages: number
  }
}
