import React from 'react'
import { makeStyles } from '@mui/styles';
import Link from 'next/link'


const useStyles = makeStyles((theme) => ({
   

      semiTopContainer: {
        paddingBottom: '1.5rem', // Equivalent to pb-6
        '@media (min-width: 768px)': {
          paddingBottom: '1.75rem', // Equivalent to md:pb-7
        },
      },

      headingTwo: {
        opacity: '1',
        color: 'rgb(227 37 38)',
        fontWeight: "800",
        fontSize: "30px",
        lineHeight: "38px",

      },

      topContainer: {
        paddingLeft: '40px',
        paddingRight: '40px',
        margin: '0 auto',
        paddingBottom: '1.5rem', // Equivalent to pb-6
        flexDirection: 'column',
        marginTop: "3rem",
        paddingLeft: '38px',
        '@media (min-width: 768px)': {
            marginTop: '4rem', // Equivalent to md:mt-16
          },
      },

      container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px', // Equivalent to gap-5
        justifyContent: 'space-between', // Add space between items vertically
    
        '@media (min-width: 768px)': {
          flexDirection: 'row', // Equivalent to md:flex-row
          flexWrap: 'wrap', // Equivalent to md:flex-wrap
        },
        '@media (min-width: 1280px)': {
          flexWrap: 'nowrap', // Equivalent to lg:flex-nowrap
          justifyContent: 'flex-start', // Align items to the start horizontally
        },
      },

      semiContainer: {
        backgroundColor: '#E32522', // Replace with your desired color
        width: '100%',
        position: 'relative',
        borderRadius: '1rem', // Equivalent to rounded-lg
        overflow: 'hidden',
        height: '700px',
        boxShadow: '0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1)', // Equivalent to shadow-lg
        // transition: 'transform 300ms ease-in-out', // Equivalent to transition-transform duration-300 ease-in-out
        cursor: 'pointer',
        // '&:hover': {
        //   transform: 'scale(1.05)', // Equivalent to group hover effect
        // },
        // Media query for screens with min-width 768px
        '@media (min-width: 768px)': {
          minHeight: '100%', // Equivalent to md:h-100
        },
        // Media query for screens with min-width 1280px
        '@media (min-width: 1280px)': {
          minHeight: '105px', // Equivalent to md:min-h-105
        },
        
      },

      backgroundCard: {
        backgroundImage: 'url(https://telecel.com.gh/static/Card_standard-883f820428fe6fabacac6867008b3217.webp)',
        backgroundSize: 'cover',
        borderRadius: "11px",
        objectFit: 'cover'
      },

      image: {
        width: '100%', // Equivalent to w-full
        height: '100%', // Equivalent to h-full
        objectFit: 'cover', // Equivalent to object-cover
        transition: 'transform 500ms ease-in-out', // Equivalent to transition-transform duration-500 ease-in-out
        '&:hover': {
          transform: 'scale(1.05)', // Equivalent to group-hover:scale-105
        },
        objectPosition: 'center', // Equivalent to object-contain
      },

      overlay: {
        position: 'absolute', // Equivalent to absolute
        bottom: 0, // Equivalent to bottom-0
        left: 0, // Equivalent to left-0
        right: 0, // Equivalent to right-0
        padding: '0.80rem', // Equivalent to p-5
        backgroundColor: 'rgba(0, 0, 0, 0.05)', // Equivalent to bg-opacity-75
        backdropFilter: 'blur(20px)', // Equivalent to backdrop-blur-2xl
        color: 'white', // Equivalent to text-white
        textAlign: 'left', // Equivalent to text-left
      },

      text: {
        fontWeight: '800', // Equivalent to font-semibold
        fontSize: '4.125rem', // Equivalent to text-body_lg
        '@media (min-width: 768px)': {
          fontSize: '2.125rem', // Equivalent to md:text-body_lg
        },
        color: '#ffffff', // Equivalent to text-negative
        marginBottom: '0.5rem', // Equivalent to mb-2
      },

      textparaTwo: {
        opacity: "1",
        color: "rgb(247, 247, 247)",
        fontSize: '1.925rem',

      },


}));

const ThirdSec = () => {
    const classes = useStyles();
  return (
   
     <div className={classes.topContainer}>
        <div className={classes.semiTopContainer}>
            <h2 className={classes.headingTwo}>
            Making life easier.

            </h2>

            <p style={{fontSize: '30px', lineHeight: "28px"}}>
            We've got a wide range of solutions.

            </p>

        </div>


        <div className={classes.container}>

        
            {/* secondCard */}

            <div  className={`${classes.semiContainer} ${classes.backgroundCard}`} >
                <Link href="#">
                <img
                src='https://telecel.com.gh/static/telecel_play-cb3cd6feb7d97c2a59f95019bea9f4b0.webp'
                className={classes.image} 
                />


             <div className={classes.overlay}>

            <div className={classes.text}>
            Telecel Play

            </div>
            <p className={classes.textparaTwo}> Take control with our self-care solution. </p>

          </div>
           

         </Link>
            </div>

             


        </div>

        

        </div>
   
  )
}

export default ThirdSec