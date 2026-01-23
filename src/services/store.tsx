import React, {  useContext, useState } from "react";
import { cookies } from "./fakeData";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StoreContext = React.createContext<any>({});
// eslint-disable-next-line react-refresh/only-export-components
export const useStore = () => useContext(StoreContext);

export const Provider = ({ children }: { children: React.ReactNode }) => {
 const [user,setUser] = useState();
 const [cart,setCart] = useState({products:[]});
 const [orders, setOrders] = useState([]);

 const value = {
    user,
    cart,
    cookies,
    orders,
    updateUser: setUser,
    updateCart: setCart,
    updateOrders: setOrders,
    emptyCart: () => setCart({ products: [] }),
 }

 return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
 )
};

