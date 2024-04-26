import React from 'react';
import './style.css';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Button } from '@mui/material';

const Newsletter = () => {
    return (
        <div className='newsLetterBanner'>
            <SendOutlinedIcon />
          
            <Button style={{color: "black"}} className=' bg-white font-extrabold'> <h4 className='text-black'  style={{color: "black", font: "bold"}} >Read More</h4></Button>
        </div>
    )
}

export default Newsletter;