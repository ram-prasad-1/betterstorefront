import { CHECKOUT_ENDPOINT } from '@components/utils/constants'
import fetcher from '../fetcher'
interface Props {
  orderId: string
  model: any
}

export default function getPaymentMethods() {
  return async function handler({ orderId, model }: Props) {
    try {
      const response: any = await fetcher({
        url: `${CHECKOUT_ENDPOINT}/${orderId}/payment-response`,
        method: 'put',
        data: model,
        headers: {
          DomainId: process.env.NEXT_PUBLIC_DOMAIN_ID,
        },
      })

      return response
    } catch (error: any) {
      console.log(error)
      // throw new Error(error.message)
    }
  }
}