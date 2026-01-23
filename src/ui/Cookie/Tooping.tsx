import { ingredients, type Product } from "../../domain/product"
import { hasAllergy, hasPreference } from "../../domain/user";
import { useUserStorage } from "../../services/storageAdapter";

type ToopingsProps = {
    cookie: Product;
}
export function Toopings({cookie} : ToopingsProps) {
    const {user} = useUserStorage()

    return (
        <ul>
            {cookie.toppings.map((topping) => (
                <li key={topping}>
                    {ingredients[topping]}{" "},
                    {!!user && hasPreference(user, topping) && <>👍</>}{" "}
                    {!!user && hasAllergy(user, topping) && <>⚠️</>}
                </li>
            ))}
        </ul>
    )
}