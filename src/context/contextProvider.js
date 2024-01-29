import React from 'react'
import { useState, createContext } from "react";
import {Data} from '../data';

export const DataContext= createContext(null);

const getDefaultCart = () => {
    let cart = {};
    
    for (const categoryKey in Data) {
      const category = Data[categoryKey];
      
      for (let j = 0; j < category.length; j++) {
        const itemId = category[j].id;
        cart[itemId] = 0;
      }
    }
    
    return cart;
  };

const ContextProvider = (props) => {
  const [cartItems, setCartItems]=useState(getDefaultCart);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
  
    for (const categoryKey in Data ) {
      const category = Data[categoryKey];
  
      for (let j = 0; j < category.length; j++) {
        const itemId = category[j].id;
  
        if (cartItems[itemId] !== 0) {
          const itemInfo = category.find((item) => item.id === itemId);
          totalAmount += cartItems[itemId] * itemInfo.price;
        }
      }
    }
  
    return totalAmount;
  };
  

  
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  

    const contextValue= {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount};
    return(
        <DataContext.Provider value={contextValue}>
            {props.children}
        </DataContext.Provider>
    )
}

export default ContextProvider;