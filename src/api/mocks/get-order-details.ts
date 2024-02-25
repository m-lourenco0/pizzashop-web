import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'example@email.com',
      phone: '1234567890',
    },
    status: 'delivered',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'item-1',
        priceInCents: 1200,
        quantity: 2,
        product: { name: 'Pizza 1' },
      },
      {
        id: 'item-2',
        priceInCents: 1200,
        quantity: 1,
        product: { name: 'Pizza 2' },
      },
    ],
    totalInCents: 3600,
  })
})
