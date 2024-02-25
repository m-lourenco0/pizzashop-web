import { http, HttpResponse } from 'msw'

import { GetMonthRevenueAmountResponse } from '../get-month-revenue'

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueAmountResponse
>('/metrics/month-receipt', async () => {
  return HttpResponse.json({
    receipt: 100000,
    diffFromLastMonth: 5,
  })
})
