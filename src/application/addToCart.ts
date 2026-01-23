import { addProduct } from "../domain/cart"
import type { Product } from "../domain/product"
import { hasAllergy, type User } from "../domain/user"
import { useNotifier } from "../services/notificationAdapter"
import { useCartStorage } from "../services/storageAdapter"
import type { CartStorageService, NotificationService } from "./ports"

export function useAddToCart() {
    const storage : CartStorageService = useCartStorage()
    const notifier : NotificationService = useNotifier()

    function addToCart(user:User, product: Product) : void{
        const warning = "This cookie is dangerous to your health! 😱";
        const isDangerous = product.toppings.some((item) => hasAllergy(user,item))
        if (isDangerous) {
            return notifier.notify(warning)
        }

        const {cart} = storage;
        const updateCart = addProduct(cart,product)
        storage.updateCart(updateCart)
    }
    return {
        addToCart
    }
}