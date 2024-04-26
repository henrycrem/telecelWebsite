import React from 'react'

import { makeStyles } from '@mui/styles';
import Link from 'next/link'
import { rgbToHex } from '@mui/material';
import { borderRadius, fontSize, fontWeight, lineHeight } from '@mui/system';
import { ArrowRight } from 'lucide-react';


const useStyles = makeStyles((theme) => ({
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
       
        // paddingLeft: '60px',
        // paddingRight: '60px',

        height: '100%',
        gap: '20px', // Equivalent to 5 in Tailwind's spacing scale
        '@media (min-width: 767px)': {
          flexDirection: 'row',
        },
      },
      

    card: {
        opacity: 1,
        backgroundColor: 'rgb(227, 37, 38)', // Replace with your desired color
        width: '100%',
        position: 'relative',
        borderRadius: '.5rem',
        overflow: 'hidden',
        boxShadow: '0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1)',
        // transition: 'transform 300ms ease-in-out',
        cursor: 'pointer',
        // '&:hover': {
        //   transform: 'scale(1.05)', // Scale factor for hover effect
        // },
        // Media query for screens with min-width 767px
        '@media (min-width: 767px)': {
          maxHeight: '100%', // Change to your desired value
          minHeight: '3rem', // Change to your desired value
        },
      },
      

      backgroundCard: {
        backgroundImage: 'url(https://telecel.com.gh/static/Card_standard-883f820428fe6fabacac6867008b3217.webp)',
        backgroundSize: 'cover',
        borderRadius: "11px",
        objectFit: 'cover'
      },

      image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: 'scale(1)',
        transition: 'transform 500ms ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      },

      overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '8.25rem', // Assuming 'p-5' is equivalent to 1.25rem
        backgroundColor: 'rgba(0, 0, 0, 0.10)', // Adjust opacity as needed
        backdropFilter: 'blur(20px)', // Equivalent to 'backdrop-blur-2xl'
        color: 'white',
        textAlign: 'left',
      },
      
      text: {
        fontWeight: '600', // Equivalent to 'font-semibold'
        fontSize: '1.125rem', // Assuming 'text-body_lg' is equivalent to 1.125rem
        marginBottom: '0.5rem', // Assuming 'mb-2' is equivalent to 0.5rem
      },

      textPara: {
        fontSize: '1rem', // Assuming 'md:text-body_base' is equivalent to 1rem
        fontWeight: '500', // Assuming 'text-subtitle' is equivalent to '500'
        color: 'rgb(227, 37, 38)', // Assuming 'text-negative' is equivalent to 'rgb(227, 37, 38)'
      },
     
      container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem', // Assuming 'gap-5' is equivalent to 1.25rem
        justifyContent: 'space-between', // Assuming 'justify-between' is equivalent to 'space-between'
        width: '100%',
      },

      overlayTwo: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '2.25rem', // Assuming 'p-5' is equivalent to 1.25rem
        backgroundColor: 'rgba(0, 0, 0, 0.10)', // Adjusted opacity for a brighter shine
        backdropFilter: 'blur(10px)', // Assuming 'backdrop-blur-2xl' applies a backdrop blur of 20px
        backdropBlur: "40px",
        color: 'white', // Assuming 'text-white' sets text color to white
        textAlign: 'left', // Assuming 'text-left' aligns text to the left
      },
      customText: {
        fontWeight: '800', // Equivalent to font-semibold
        fontSize: '1.75rem', // Equivalent to text-body_lg
        '@media (min-width: 768px)': {
          fontSize: '1.25rem', // Equivalent to md:text-body_lg
        },
        color: 'white', // Equivalent to text-negative
        marginBottom: '0.5rem', // Equivalent to mb-2
      },

      textparaTwo: {
        color: "rgb(247, 247, 247)"

      },

      containerss :{
        paddingLeft: '40px',
        paddingRight: '40px',
        margin: '0 auto',
         /* Center the container horizontally */
        // width: '90%', /* Ensure container takes full width */
        marginBottom: '40px',
        boxSizing:' border-box', /* Include padding in width calculation */
        '@media (min-width: 768px)': {
            marginTop: '4rem', // Equivalent to md:mt-16
          },
    },

    topContainer: {
        paddingBottom: '1.5rem', // Equivalent to pb-6
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem', // Equivalent to gap-5
        boxSizing: 'border-box',
        justifyContent: 'space-between', // Equivalent to justify-between
        paddingLeft: '38px',
        '@media (min-width: 768px)': {
          paddingBottom: '1.75rem', // Equivalent to md:pb-7
          flexDirection: 'row', // Equivalent to md:flex-row
          alignItems: 'center', // Equivalent to md:items-center
        },
      },

      headingTwo: {
        opacity: '1',
        color: 'rgb(227, 37, 38)',
        fontWeight: '700',
        fontSize: "40px",
        lineHeight: "32px",
        paddingBottom: "10px",

      },

      headingPara: {
        fontSize: "30px",
        lineHeight: "30px",

      },

      buttonStyle: {
       opacity: "1",
       color: 'rgb(247, 247, 247)',
       fontSize: "24px",
       lineHeight: "20px",
       paddingLeft: "25px",
       paddingRight: "25px",
       padding: "30px",
       backgroundColor: "rgb(227, 37 ,38 )",
       border: "none",
       borderRadius: "9999px",
       cursor: 'pointer',

      },

      spanContainer: {
        display: 'flex',
        gap: '0.5rem', // Equivalent to gap-2
        alignItems: 'center', // Equivalent to items-center
      },
   

  }));

const FirstSec = () => {
    const classes = useStyles();

  return (
    <div className={classes.containerss}>

        <div className={classes.topContainer}>
        <div>
            <h2 className={classes.headingTwo}>
               Deals you can't resist.
            </h2>
            
            <p className={classes.headingPara}> Our devices come with data and voice bundles your wallet will love.</p>
        </div>

        <div>

        <Link href="#">

        <button className={classes.buttonStyle}>
            <span className={classes.spanContainer}>
            Visit Store

            <ArrowRight/>

            </span>

        </button>
        </Link>
        </div>
        <div>


        </div>

        </div>
      <div className={classes.flexContainer}>
     <div  className={`${classes.card} ${classes.backgroundCard}`}>
         <Link href="#">
         <img
           src='https://telecel.com.gh/static/pre-order-cd924fd6727fdd9966fdf479f3bfe8f5.webp'
           className={classes.image} 
          />
            <div className={classes.overlayTwo}>

               <div className={classes.text}>
                 Order your Samsung Galaxy A05 now! 

                </div>
              <p className={classes.textPara}></p>
            
            </div>

         </Link>

        </div>

        <div className={classes.container}>
            <div className={`${classes.card} ${classes.backgroundCard}`}>

            <Link href="#">
                <img
                src='https://telecel.com.gh/static/all-device-02c6efd7e638630d2a50aa7c416ada02.webp'
                className={classes.image} 
                />
             <div className={classes.overlayTwo}>

               <div className={classes.customText}>
               All Devices 

                </div>
              <p className={classes.textparaTwo}>

              Starting from $75.00
              </p>
            
            </div>

         </Link>


            </div>


            <div className={`${classes.card} ${classes.backgroundCard}`}>

                    <Link href="#">
                        <img
                        src='https://telecel.com.gh/static/connected-device-6215f1c36c2481aea1fefb9090b202e4.webp'
                        className={classes.image} 
                        />
                    <div className={classes.overlayTwo}>

                    <div className={classes.customText}>
                    Connected Device

                        </div>
                    <p className={classes.textparaTwo}>

                    Starting from $65.00
                    </p>

                    </div>

                    </Link>


                    </div>


        </div>
      
    </div>
    </div>
  )
}

export default FirstSec
