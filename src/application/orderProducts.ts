import type { Cart } from "../domain/cart"
import { createOrder } from "../domain/order"
import type { User } from "../domain/user"
import { useNotifier } from "../services/notificationAdapter"
import { usePayment } from "../services/paymentAdapter"
import { useCartStorage, useOrdersStorage } from "../services/storageAdapter"
import type { CartStorageService, NotificationService, OrdersStorageService, PaymentService } from "./ports"

export function useOrderProducts() {
    const notifier : NotificationService = useNotifier()
    const payment : PaymentService = usePayment()
    const orderStorage : OrdersStorageService = useOrdersStorage()
    const cartStorage : CartStorageService = useCartStorage()

    async function orderProducts(user:User,cart: Cart) : Promise<void> {
        
        const order = createOrder(user,cart)
        const paid = await payment.tryPay(order.total)
        if (!paid) {
            return notifier.notify("The payment wasn't successful 🤷")
        }

        const {orders} =orderStorage;
        orderStorage.updateOrders([...orders,order]);
        cartStorage.emptyCart()
    }
    
    return {
        orderProducts
    }
}