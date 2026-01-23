import type { PaymentService } from "../application/ports";
import { fakeApi } from "./api";
export function usePayment() : PaymentService {
    return {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        tryPay(amount : PriceCents) {
            return fakeApi(true)
        },
    }
}