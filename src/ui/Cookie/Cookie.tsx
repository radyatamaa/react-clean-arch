import { useAddToCart } from "../../application/addToCart";
import { contains } from "../../domain/cart";
import type { Product } from "../../domain/product";
import { useCartStorage, useUserStorage } from "../../services/storageAdapter";
import styles from './Cookie.module.css'
import { Toopings } from "./Tooping";

type CookieProps = {
    cookie:Product;
}

export function Cookie ({cookie} : CookieProps) {
    const {user} = useUserStorage()
    const {cart} = useCartStorage()
    const {addToCart} = useAddToCart()

    return (
        <article className={styles.cookie}>
            <span className={styles.image}>🍪</span>
            <span className={styles.title}>{styles.title}</span>
            <Toopings cookie={cookie} />

            { !!user && (
                <button type="button" onClick={() => addToCart(user,cookie)}> {cookie.price / 100}</button>
            )}

            {contains(cart,cookie) && (
                <span className={styles.contains}> In your cart</span>
            )}
        </article>
    )
}