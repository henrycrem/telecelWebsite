
'use client'
import React from 'react';
import { makeStyles } from '@mui/styles';
import { motion } from "framer-motion";
import { useRef, useState, useEffect  } from "react";
import { useInView } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '50px 0',
  },
  mapContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    height: 'auto',
    '& img': {
      maxWidth: '100%',
      height: 'auto',
    },
  },
}));

const NewsSection = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  const classes = useStyles();



  return (
    // <motion.div
    //     initial={{ y: 100, opacity: 0 }}
    //     animate={isInView ? { y: 0, opacity: 1 } : {}}
      
    //   >
    <section className={classes.mainContainer}>
       
      <div className={classes.mapContainer}>
      
        <img
          src='./map.png'
          alt='map'
        />

      
      </div>
    </section>
    //   </motion.div>
 
  );
};

export default NewsSection;
