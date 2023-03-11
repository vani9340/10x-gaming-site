import React, { useState } from 'react'

const CartContext = React.createContext()
const CartProvider =(props)=> {
    const[cartData,setCartData]= useState([]);
    // const[cartData1,setCartData1]=useState(cartData)
    const addCartData =(data)=>{
        setCartData([...cartData,data])
        console.log(...cartData)
    }
    // const removeCartData =(data)=>{
    console.log(cartData)
    // }
    return(
        <CartContext.Provider value={{cartData,addCartData}}>
        {props.children}
        </CartContext.Provider>
    ) 
}
export {CartContext,CartProvider}