import React from 'react'
import './store.css'
import { makeStyles } from '@mui/styles';
import Link from 'next/link'
import { rgbToHex } from '@mui/material';
import { borderRadius, fontSize, fontWeight, lineHeight } from '@mui/system';
import { ArrowRight } from 'lucide-react';
import FirstSec from '../storeComponents/firstSec';
import SecondSec from '../storeComponents/secondSec';
import ThirdSec from '../storeComponents/thirdSec';



const useStyles = makeStyles((theme) => ({
   

  }));

const StoreSection = () => {
    const classes = useStyles();

  return (
    <div>

        <FirstSec/>
       <SecondSec/>
       <ThirdSec/>
    </div>
    
  )
}

export default StoreSection
