/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const StoreContext = createContext(null)

// eslint-disable-next-line no-unused-vars
const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});
    const url = "http://localhost:4000"
    const [token,setToken] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [food_list,setFoodList] = useState([])

    // eslint-disable-next-line no-unused-vars
    const addToCart = async (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if (token) {
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }
            // eslint-disable-next-line no-unused-vars
            const removeFromCart = async (itemId) => {
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
                if (token) {
                    await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
                }

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
          const fetchFoodList = async () => {
            const response = await axios.get(url+"/api/food/list");
            setFoodList(response.data.data)
          }
          const loadCartData = async (token) => {
            const response =  await axios.post(url+"/api/cart/get",{},{headers:{token}})
            setCartItems(response.data.cartData);
          }
//Persist user login state after page refresh.
          useEffect(() => {
           
            async function loadData() {
                await fetchFoodList()
                if (localStorage.getItem("token")) {
                    setToken(localStorage.getItem("token"));
                    await loadCartData(localStorage.getItem("token"));
                }
                
            }
            loadData();

          },[])

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