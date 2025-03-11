
import { BaseRepository } from "~/repositories/baseRepository"
import type ApiListResponse from "~/types/ApiListResponse"
import type Vehicle from "~/layers/stock/types/Vehicle"

export class StockVoRepository extends BaseRepository {

  private GET_STOCK_VO = '/api/v3/stock/vehicles'

  constructor() {
    super()
  }
  async getStockVo(options: {}) {
    return this.api.get<ApiListResponse<Vehicle>>(this.GET_STOCK_VO, {
      ...options
    })
  }

}

