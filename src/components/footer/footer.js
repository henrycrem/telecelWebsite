"use client"
import React, { useState, useEffect } from 'react';
import './footer.css';

import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'
import Icon4 from '../../assets/images/icon-4.svg'
import Icon5 from '../../assets/images/icon-5.svg'
import Logo from '../../assets/images/telec.svg';
import Link from 'next/link';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import paymentImage from '../../assets/images/payment-method.png';

import appStore from '../../assets/images/app-store.jpg';
import googlePlay from '../../assets/images/google-play.jpg';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MidNewsletter from '../../components/midnewsletter/index';
import NewsletterImg from '../../assets/images/webImg.png';
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const [items, setItems] = useState([
        {
          icon: Icon1,
          title: 'Lightning-Fast Speeds',
          description: 'Safe Connections',
        },
        {
          icon: Icon2,
          title: 'Unlimited Data Usage',
          description: 'Secure Network',
        },
        {
          icon: Icon3,
          title: '24/7 Customer Support',
          description: 'Timely Response',
        },
        {
          icon: Icon4,
          title: 'Protected Data',
          description: 'Safe Internet',
        },
        {
          icon: Icon5,
          title: 'Seamless Connectivity',
          description: 'Orders $50 or more',
        },
      ]);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setItems(prevItems => {
            const newItems = [...prevItems];
            const firstItem = newItems.shift();
            newItems.push(firstItem);
            return newItems;
          });
        }, 2000);
    
        return () => clearInterval(interval);
      }, []);
    
    return (
        <>

            <section className='newsLetterSection'>
                <div className='container-fluid'>
                    <div className='box d-flex align-items-center'>
                        <div className='info'>
                            <h2 style={{color: "white", fontWeight: "bolder"}}>Stay home and stay updated   <br />with our company's newsletter.</h2>
                            <p style={{color: "#ffffff", fontWeight: "bolder"}}>Get the latest updates now!</p>
                            <br /><br className='res-hide' />
                            <MidNewsletter />
                        </div>

                        <div className='img'>
                            <Image src={NewsletterImg} className='w-100 h-50' alt='bannerImage'/>
                        </div>
                    </div>
                </div>
            </section>

            <div className='footerWrapper'>
                <div className='footerBoxes'>
                    <div className='container-fluid'>
                    <div className='row'>
      {items.map((item, index) => (
        <div className='col' key={index}>
          <div className='box d-flex align-items-center w-100'>
            <span><Image src={item.icon} className="white-icon" /></span>
            <div className='info'>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
                    </div>
                </div>


                <footer>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-3 part1'>
                            <Link href="/"><Image src={Logo}  className='logo' style={{ width: '150px', height: '80px' }} /></Link>
                                <br /><br />
                                <p style={{ color: '#000000' }}>Telecel Liberia Official Website</p>
                                <br />

                                <p style={{ color: '#000000' }}><LocationOnOutlinedIcon style={{ color: '#000000' }} /> <strong style={{ color: '#000000' }}>Address</strong>: 3rd Street Sinkor, Monrovia, Liberia, West Africa</p>
                                <p style={{ color: '#000000' }}><HeadphonesOutlinedIcon style={{ color: '#000000' }} /> <strong style={{ color: '#000000' }}>Call Us:</strong> (+231) - 770-399-399 </p>
                                <p style={{ color: '#000000' }}><EmailOutlinedIcon style={{ color: '#000000' }} /> <strong style={{ color: '#000000' }}>Email:</strong> info@teleceliberia.com</p>
                                <p style={{ color: '#000000' }}><WatchLaterOutlinedIcon style={{ color: '#000000' }} /> <strong style={{ color: '#000000' }}>Hours:</strong> 9:00AM - 5:00PM, Mon - Sat</p>

                            </div>


                            <div className='col-md-6 part2'>
                                <div className='row'>
                                    <div className='col'>
                                        <h3>TELECEL LIBERIA</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link href="#">About Us</Link></li>
                                            <li><Link href="#">Personal</Link></li>
                                            <li><Link href="#">Business</Link></li>
                                            
                                            <li><Link href="#">Careers</Link></li>
                                        </ul>
                                    </div>

                                    <div className='col'>
                                        <h3>HELP & SUPPORT</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link href="#">Find a Shop</Link></li>
                                            <li><Link href="#">Contact Us</Link></li>
                                            <li><Link href="#">Privacy Policy</Link></li>
                                            <li><Link href="#">Terms &amp; Conditions</Link></li>
                                            <li><Link href="#">Cookies Policy</Link></li>
                                           
                                        </ul>
                                    </div>


                                    <div className='col'>
                                        <h3>OUR SERVICES</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link href="#">Home Wi-Fi</Link></li>
                                            <li><Link href="#">Enterprise Wi-Fi</Link></li>
                                            <li><Link href="#">Fiber To The Home</Link></li>
                                            <li><Link href="#">Fiber To The Business</Link></li>
                                            <li><Link href="#">Cyber Security</Link></li>
                                            <li><Link href="#">Internet of Things</Link></li>
                                            <li><Link href="#">Software Development</Link></li>
                                        </ul>
                                    </div>


                                    <div className='col'>
                                        <h3>QUICKLINKS</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link href="#">Pay Bills</Link></li>
                                            <li><Link href="#">Student Onboarding</Link></li>
                                            <li><Link href="#">Blog</Link></li>
                                          
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-3 part3'>
                                {/* <h3>Install App</h3>
                                <br className='res-hide'/>
                                <p>From App Store or Google Play</p>

                                <div className='d-flex'>
                                    <Link href={''}><Image src={appStore} width={150} /></Link>
                                    <Link href={''}><Image src={googlePlay} className='mx-2' width={150} /></Link>
                                </div>

                                <br />

                                <p>Secured Payment Gateways</p> */}


                                {/* <Image src={paymentImage} /> */}
                            </div>

                        </div>


                        <hr style={{ backgroundColor: '#E32522' }} />



                        <div className='row lastStrip'>
                            <div className='col-md-3 part_1'>
                            <p style={{ color: '#E32522', fontWeight: "bolder" }}>© {currentYear}, Telecel Liberia, All rights reserved</p>
                            </div>

                            <div className='col-md-6 d-flex part_2'>
                                <div className='m-auto d-flex align-items-center phWrap'>
                                    <div className='phNo d-flex align-items-center mx-5'>
                                        <span><HeadphonesOutlinedIcon  style={{ color: '#E32522' }} /></span> 
                                        <div className='info ml-3'>
                                            <h3 className='text-g mb-0' >+231-770-399-399</h3>
                                            <p className='mb-0' style={{color: "#000000", fontWeight: "bolder"}}>24/7 Support Center</p>
                                        </div>
                                    </div>

                                    <div className='phNo d-flex align-items-center  mx-5'>
                                        <span><HeadphonesOutlinedIcon  style={{ color: '#E32522' }} /></span>
                                        <div className='info ml-3'>
                                            <h3 className='text-g mb-0'>+231-881-399-399</h3>
                                            <p className='mb-0' style={{color: "#000000", fontWeight: "bolder"}}>24/7 Support Center</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-3 part3  part_3'>
                                <div className='d-flex align-items-center'>
                                    <h5 style={{color: "#000000", fontWeight: "bolder"}}>Follow Us</h5>
                                    <ul className='list list-inline'>
                                        <li className='list-inline-item'>
                                            <Link href={''}><FacebookOutlinedIcon color='#E32522' style={{ color: '#E32522' }} /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link href={''}><TwitterIcon style={{ color: '#E32522' }} /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link href={''}><InstagramIcon style={{ color: '#E32522' }} /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link href={''}><YouTubeIcon style={{ color: '#E32522' }} /></Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </footer>


            </div>
        </>
    )
}

export default Footer;