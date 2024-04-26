import React, { useEffect, useContext } from 'react';
import Slider from "react-slick";
import './index.css';

import Slide1 from '../../assets/images/broad-street.jpg';
import Slide2 from '../../assets/images/Sinkor.jpg';
import { Button } from '@mui/material';
import Newsletter from '../../components/newsletter/index';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { ArrowRight } from 'lucide-react';
import { makeStyles } from '@mui/styles';

import Link from 'next/link'

import { MyContext } from '../../context/ThemeContext';
import Image from 'next/image';


const useStyles = makeStyles((theme) => ({ 

    spanContainer: {
        display: 'flex',
        gap: '0.5rem', // Equivalent to gap-2
        alignItems: 'center', // Equivalent to items-center
      },
}));

const HomeSlider = () => {
    const classes = useStyles();
    const context = useContext(MyContext);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: context.windowWidth > 992 ? true : false,
        autoplay: true
    };

    return (
        <section className='homeSlider'>
            <div className='container-fluid position-relative'>
                <Slider {...settings} className='home_slider_Main'>
                    <div className="item">
                        <div className="slide-content">
                            <Image src={Slide1} className='slider-image' alt='slide' />
                            <div className='info mtop'>
                                <h2 class="mb-4 text-white font-extrabold ">
                                    Proudly Liberia #1 ISP
                                </h2>

                               
                                    <Link href="#">

                                    <Button style={{color: "black"}} className=' bg-white font-extrabold button'> 
                                    
                                    <h4 className='text-black'  style={{color: "black", font: "bold"}} >Read More</h4>
                                    <ArrowRight className='text-black' color='black' size={35} style={{marginLeft: "10px", fontSize: "25px"}}/>
                                    
                                    
                                    </Button>


                                    </Link>

                                    
                                              
                            </div>

                        </div>
                    </div>

                    <div className="item">
                        <div className="slide-content">
                            <Image src={Slide2} className='slider-image' alt='slide' />
                            <div className='info mtop'>
                                <h2 class=" text-white font-extrabold">
                                    Best Internet Speeds
                                </h2>

                                <Link href="#">

                                    <Button style={{color: "black"}} className='bg-white font-extrabold button'> 
                                    
                                    <h4 className='text-black'  style={{color: "black", font: "bold"}} >Read More</h4>
                                   
                                   <ArrowRight color='black' className='text-black' size={35} style={{marginLeft: "10px", fontSize: "25px"}}/>

                                        
                                                            
                                    </Button>


                                    </Link>
                            </div>
                        </div>
                    </div>
                </Slider>
                {/* {context.windowWidth > 992 && <Newsletter />} */}
            </div>
        </section>
    );
}

export default HomeSlider;
