import { currentDateTime } from "../lib/datetime";
import type { Cart } from "./cart";
import { totalPrice } from "./product";
import type { User } from "./user";

export type OrderStatus = "new" | "delivery" | "completed";

export type Order = {
    user: UniqueId;
    cart: Cart;
    created: DateTimeString;
    status: OrderStatus;
    total: PriceCents; 
}

export function createOrder(user: User, cart: Cart) : Order {
    return {
        cart,
        user: user.id,
        status: "new",
        created : currentDateTime(),
        total: totalPrice(cart.products)
    }
}