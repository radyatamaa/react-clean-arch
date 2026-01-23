import { Navigate } from "react-router-dom";
import { useUserStorage } from "../../services/storageAdapter";
import { Profile } from "../Profile";
import { Orders } from "../Orders";
import { Cart } from "../Cart";
import { Buy } from "../Buy";

export function User() {
    const {user} = useUserStorage()
    if (!user) {
        if (!user) return <Navigate to="/" replace />;
    }

    return (
        <main>
            <Profile />
            <Orders />
            <Cart />
            <Buy />
        </main>
    )
}