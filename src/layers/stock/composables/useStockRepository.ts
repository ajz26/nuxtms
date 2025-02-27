import { StockVoRepository } from "../repositories/stockVoRepository"

export const useStockRepository = () => {
  return new StockVoRepository()
}
