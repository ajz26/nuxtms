
import { BaseRepository } from "~/repositories/baseRepository"
import type ApiListResponse from "~/types/ApiListResponse"
import type Vehicle from "~/layers/stock/types/Vehicle"

export class StockVoRepository extends BaseRepository {

  private GET_STOCK_VO = '/api/v2/stock/vehiculos/list'

  constructor() {
    super()
  }
  async getStockVo(options: { lazy: boolean }) {
    return this.api.get<ApiListResponse<Vehicle>>(this.GET_STOCK_VO, {
      params: {
        draw: 2,
        order: [{ column: 0, dir: 'asc' }],
        start: 0,
        length: 25,
        tipoVehiculoId: 'vo',
      },
      ...options
    })
  }

}

