/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
// eslint-disable-next-line no-unused-vars
import { food_list } from "../assets/frontend_assets/assets"
export const StoreContext = createContext(null)

// eslint-disable-next-line no-unused-vars
const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});

    // eslint-disable-next-line no-unused-vars
    const addToCart = (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
            // eslint-disable-next-line no-unused-vars
            const removeFromCart = (itemId) => {
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

            }

            useEffect(()=>{
                console.log(cartItems);

            },[cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider