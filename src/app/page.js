"use client"
import { useContext, useEffect, useState, useRef } from 'react';
import SliderBanner from '../components/slider/index';
import CatSlider from '@/components/catSlider';

import { MyContext } from '@/context/ThemeContext';
import { fetchDataFromApi } from '@/utils/api';
import Banners from '@/components/banners';
import Product from '@/components/product';
import Banner4 from '../assets/images/banner4.jpg';
import Slider from "react-slick";
import Image from 'next/image';
import TopProducts from '@/components/TopProducts';
import Items from '@/components/items';
import SecondSection from '@/components/SecondSection';
import PricingPage from '@/components/pricing/page';
import StoreSection from '@/components/store/page';
import LocomotiveScroll from 'locomotive-scroll';
import NewsSection from '@/components/news/page';




export default function Home() {

  // Initialize Locomotive Scroll directly here
  useEffect(() => {
    const container = document.querySelector('.scroll-container');
    if (!container) return; // Check if container exists
    const scroll = new LocomotiveScroll({
      el: container,
      smooth: true,
      // Add other configuration options here as needed
    });
    return () => {
      scroll.destroy();
    };
  }, []);
  


  

  const [productData, setProductData] = useState([]);
  const [catArray, setcatArray] = useState([]);
  const [activeTab, setactiveTab] = useState();
  const [activeTabIndex, setactiveTabIndex] = useState(0);
  const [activeTabData, setActiveTabData] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [bestSells, setBestSells] = useState([]);

  const productRow = useRef();

  const context = useContext(MyContext);


  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: context.windowWidth < 992 ? false : true,
  };



  useEffect(() => {

    getData("/api/categories?populate=*");

    getBestSellerData(`/api/products?populate=*&[filters][sub_cats][title]=${'Mobiles and Tablets'}`)
   
    window.scrollTo(0, 0);
  }, []);




  const cat_ARR = [];
  const getData = (apiUrl) => {
    fetchDataFromApi(apiUrl).then(res => {
      setProductData(res);
      context.setProductData(res.data);


      res.data.length !== 0 && res.data.map((item) => {
        item.attributes.sub_cats.data.map((subCat, index) => {
          cat_ARR.push({
            "title": subCat.attributes.title,
            id: item.id
          })

        })
      })


      const uniqueObject = {};
      const uniqueArray = cat_ARR.filter(obj => {
        const key = JSON.stringify(obj); // Convert object to a string for uniqueness
        return uniqueObject.hasOwnProperty(key) ? false : (uniqueObject[key] = true);
      });

      setcatArray(uniqueArray);

      filterBySuCat(uniqueArray[0].title)
    })
  }


  const getBestSellerData = (apiUrl) => {
    fetchDataFromApi(apiUrl).then(res => {
      setBestSells(res);
    })
  }



  var filterProducts = [];

  const filterBySuCat = (title) => {
    filterProducts = [];
    fetchDataFromApi(`/api/products?populate=*&[filters][sub_cats][title]=${title}&pagination[start]=0&pagination[limit]=10`).then(res => {
      //console.log(res.data);

      res.data?.length !== 0 && res.data !== undefined &&
        res.data?.map((item) => {
          filterProducts.push(item)
        })

      setActiveTabData(filterProducts);

      setTimeout(() => {
        setIsLoadingProducts(false);
      }, [500]);

    })
  }

  return (
    <>
      {/* <div style={{ display: 'block' }} className="scroll-container"> */}
        <div style={{ display: 'block' }}>

        <SliderBanner />

       
            <Banners />

            <div style={{paddingTop: "40px", paddingBottom: "60px"}} >

            <Items/>
            </div>

            <SecondSection/>

          
            <PricingPage/>

          



            <StoreSection/>

            <NewsSection/>

      </div>
    </>
  )
}
