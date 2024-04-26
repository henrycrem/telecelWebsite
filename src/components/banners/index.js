import React from 'react';
import Banner1 from '../../assets/images/internetSev.png';
import Banner2 from '../../assets/images/fiberCon.png';
import Banner3 from '../../assets/images/cyber.png';
import Banner4 from '../../assets/images/webDev.png';
import { makeStyles } from '@mui/styles';
import './style.css';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
   

    semiTopContainer: {
      paddingBottom: '1.5rem', // Equivalent to pb-6
      paddingLeft: '40px',
      paddingRight: '40px',
      margin: '0 auto',
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

}));

const Banners = ()=>{
    const classes = useStyles();
    return(
        <div className='bannerSection'>
            <div className={classes.semiTopContainer}>
            <h2 className={classes.headingTwo}>
            Explore Our Services 

            </h2>

            <p style={{fontSize: '30px', lineHeight: "28px"}}>
           Our wide range of solutions.

            </p>

        </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='box'>
                            <Image src={Banner1} className='w-100 transition'  alt="banner img"/>
                           
                        </div>
                    </div>

                    <div className='col'>
                        <div className='box'>
                            <Image src={Banner2} className='w-100 transition' alt="banner img" />
                        </div>
                    </div>

                    <div className='col'>
                        <div className='box'>
                            <Image src={Banner3} className='w-100 transition' alt="banner img" />
                        </div>
                    </div>
                    <div className='col'>
                        <div className='box'>
                            <Image src={Banner4} className='w-100 transition' alt="banner img" />
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Banners;