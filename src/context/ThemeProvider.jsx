"use client"

import { useState, useEffect } from 'react';
import { MyContext } from "./ThemeContext";
import axios from 'axios';
import { fetchDataFromApi } from '@/utils/api';
import { postData } from '@/utils/api';

const ThemeProvider = ({ children }) => {

  const [productData, setProductData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 0)); // Conditionally set initial value

  const [headerSearchCatListValue, setHeaderSearchCatListValue] = useState("");

  const [searchKeyword, setsearchKeyword] = useState();
  const [searchData, setSearchData] = useState([]);

  const [isLogin, setIsLogin] = useState();
  const [isOpenFilters, setIsopenFilters] = useState(false);

  useEffect(() => {

    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);
    getCartData(`/api/cart-datas`);

    // Event listener to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const getCartData = (url) => {
    fetchDataFromApi(url).then(res => {
      setCartItems(res.data);
    })
  }

  const addToCart = async (item) => {
    // Your addToCart logic
  }

  const signIn = () => {
    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);
  }

  const signOut = () => {
    localStorage.removeItem('isLogin');
    setIsLogin(false);
  }

  const openFilters = () => {
    setIsopenFilters(!isOpenFilters)
  }

  const value = {
    productData,
    setProductData,
    cartItems,
    isLogin,
    windowWidth,
    isOpenFilters,
    addToCart,
    signOut,
    signIn,
    openFilters,
    headerSearchCatListValue,
    setHeaderSearchCatListValue,
    setSearchData,
    searchData,
    setsearchKeyword,
    searchKeyword,
    setCartItems,
    getCartData
  }

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  )
}

export default ThemeProvider;
