/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
// eslint-disable-next-line no-unused-vars
import { food_list } from "../assets/frontend_assets/assets"
export const StoreContext = createContext(null)

// eslint-disable-next-line no-unused-vars
const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});
    const url = "http://localhost:4000"
    const [token,setToken] = useState("");

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

          // eslint-disable-next-line no-unused-vars
          const getTotalCartAmount = () => {
            let totalAmount = 0;
            for(const item in cartItems){
                if(cartItems[item] > 0){
                     let itemInfo = food_list.find((product) => product._id === item);
                     totalAmount += itemInfo.price* cartItems[item];
                   }

                }return totalAmount;
                
          }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        // eslint-disable-next-line no-undef
        getTotalCartAmount,
        url,
        token,
        setToken

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider