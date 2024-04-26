'use client'

import { ArrowRight, CheckCircleTwoTone, Diversity1Outlined } from "@mui/icons-material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect  } from "react";
import { useInView } from "framer-motion";
import { Box } from "@mui/material";
import { Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { makeStyles } from '@mui/styles';
import { Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';




import AOS from "aos";
import "aos/dist/aos.css";


const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
    justifyContent: 'center',
    '& .md\:flex': {
      display: 'flex',
    },
    '& .md\:space-x-10': {
      '& > * + *': {
        marginLeft: '2.5rem', // Adjust this value as needed
      },
    },
  },

  text: {
    fontSize: '5.25rem', // Equivalent to text-4xl
  
    '@media (min-width: 768px)': {
      fontSize: '3.75rem', // Equivalent to md:text-6xl
      
    },

    paddingTop: '2.5rem', // Equivalent to pt-10
    // paddingBottom: '5rem', // Equivalent to py-20
    display: 'none', // Equivalent to hidden
    '@media (min-width: 768px)': {
      display: 'block', // Show on medium screens and above
    },

    textAlign: 'center', // Equivalent to text-center
    fontWeight: 'bold', // Equivalent to font-semibold
    color: '#180f3d', // You can directly use hex color codes
  },

  tabcontainer: {
    display: 'none', // Hidden by default
    marginTop: "15px",
    '@media (min-width: 768px)': {
      display: 'flex', // Show on medium screens and above
    },

    alignItems: 'center',
    justifyContent: 'center',
  },
  
  tab: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '2.5rem', // Equivalent to space-x-10
    width: '15rem', // Equivalent to w-60
    borderBottom: '4px solid transparent', // Default border style
    paddingTop: '1rem', // Equivalent to pt-2
    color: '#6b7280', // Equivalent to text-muted-foreground
    cursor: 'pointer',
    '&:hover': {
      color: '#180f3d', // Change color on hover
      borderBottomColor: '#E32522', // Change border color on hover
    },
  },

  activeTab: {
    color: '#180f3d', // Active tab color
    borderBottomColor: '#E32522', // Active tab border color
  },

  displaycontainer: {
    paddingTop: '50px',
    display: 'none',
    '@media (min-width: 768px)': {
      display: 'flex',
    },
    justifyContent: 'center',
  },

  contentWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },

  content: {
    display: 'flex',
    // Adjust the width of the content wrapper
    // maxWidth: '900px', // Optional: Set a maximum width for responsiveness
    margin: '0 10px',
    gap: '212px',
  },

  card: {
    backgroundColor: '#E32522',
    padding: '20px',
    borderRadius: '10px',
    color: 'white',
    width: '100%', // Adjust the width of the card
  },

  features: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
   
  },

  featureItem: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: '40px'
  },

  featureIcon: {
    fontSize: '2rem',
    marginRight: '10px',
  },

  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  featureText: {
    fontSize: "30px",
  },

  image: {
    
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  
  },
});

const tabs = [
  {
    name: "Fiber Infrastructure",
    title: "Fiber Infrastructure",
    feature1: "Fiber to the Business or FTTB creates a faster, more reliable connection allowing work to flow seamlessly in your business. Telecel offers a reliable secure business-grade Fiber line fully managed by the Telecel team!",
    // feature2: "Optimize product placements based on sales data.",
    // feature3: "Implement automated reorder processes for efficiency.",
    image: "/fiberInf.png"
  },
  {
    name: "SD-WAN",
    title: "SD-WAN",
    feature1: "SD-WAN is a good choice for businesses because it can improve their network’s connectivity, cost-effectiveness, and performance, leading to increased productivity and growth. However, it is important to prioritize security when implementing an SD-WAN solution because it exposes the extended WAN perimeter to the public Internet.",
    // feature2: "Implement a transparent financial approval system.",
    // feature3: "Develop an internal procurement portal for resources.",
    image: "/cloudImg.png"
  },
  {
    name: "Cloud Backup",
    title: "Cloud Backup",
    feature1: "Our team is dedicated to ensuring the safe storage and recoverability of your online applications and virtual machines (VMs). With our advanced security measures and reliable backup systems, you can trust that your data is in good hands with us.",
    // feature2: "Monitor budget allocations for medical departments.",
    // feature3: "Establish an online patient portal for engagement.",
    image: "/gamingImg.png"
  },
  {
    name: "Telecel Gaming",
    title: "Telecel Gaming",
    feature1: "Telecel provides the ideal solution to enable virtually anyone to enjoy the benefits of gaming. Whether you, your family, friends and colleagues want to play online or offline, for fun or competitively, Telecel offers a solution for everyone. No connectivity? No problem!",
    // feature2: "Streamline invoice processing for financial efficiency.",
    // feature3: "Establish a centralized procurement platform for vendors.",
    image: "/hostingImg.png"
  },
  {
    name: "Host Configuration",
    title: "Host Configuration",
    feature1: "Our high-speed plans, with options up to 10 Gbps, are designed to support the growing needs of your business. With symmetrical bandwidth guaranteed, you can count on consistent and reliable speeds for all of your online activities. Whether you’re running multiple virtual machines, streaming video, or transferring large files.",
    // feature2: "Manage tuition payments and student fees efficiently.",
    // feature3: "Establish an online learning platform for remote education.",
    image: "/sdImg.png"
  }
];

const SecondSection = () => {

 

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState(tabs[0]);


  const classes = useStyles();




  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        // background: "linear-gradient(to right, #FF6C40, #FFB800, #FF6C40)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingY: { md: 10 },
        paddingX: 10,
      }}

      
    >
      <Box  sx={{
    display: { md: "flex" },
    gap: { md: 20 },
    borderBottom: { md: "8px solid" },
    borderColor: { md: "red" },
    paddingBottom: { md: 10 },
    position: "relative",
    zIndex: 10,
  }}>
        <Box sx={{ marginBottom: 5 }}>
        <Typography variant="h2" fontWeight="bold" color="red">
            80% Of Mega Institutions In Liberia Uses Telecel Liberia Services
          </Typography>

          <Box display="flex" alignItems="center" justifyContent="space-between">

          <Box display="flex" alignItems="center" sx={{ '&:hover': { color: 'black', fontWeight: "bolder" } }}>
  <Typography variant="h3" sx={{ fontSize: '2.25rem', marginTop: '10px' }}>
    Proudly The First Among Eguals
  </Typography>
  <ArrowRightIcon sx={{ fontSize: '2.5rem' }} />
</Box>
      </Box>
      </Box>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={classes.container}
        >
          <Image
            src="/EcobankLogo.png"
            width={150}
            height={150}
            alt="logo"
          />
          <Image
            src="/jtBank.png"
            width={100}
            height={100}
            alt="logo"
          />
          <Image
            src="/usEmb.png"
            width={100}
            height={100}
            alt="logo"
          />
          <Image
            src="/swiss.png"
            width={100}
            height={100}
            alt="logo"
          />
        </motion.div>
      </Box>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        className={classes.text}
      >
        See How Businesses <br /> Use Telecel Liberia 
        Services
      </motion.div>

      <div className={classes.tabcontainer}>
  {tabs.map((tab) => (
    <div
      key={tab.name}
      className={`${classes.tab} ${
        activeTab === tab ? classes.activeTab : ''
      }`}
      onClick={() => setActiveTab(tab)}
    >
      <div className="flex text-3xl text-center items-center h-20 w-20 justify-center">
        <div className="text-[#333] font-semibold">{tab.name}</div>
      </div>
    </div>
  ))}
</div>

      {/* Display content based on the active tab */}
      <div className={classes.displaycontainer}>
      {activeTab && (
        <div className={classes.contentWrapper}>
          <div className={classes.content}>
            <div className={classes.card} style={{width : "900px"}}>
              <Typography variant="h4" className="py-10 underline" align="center">
                {activeTab.title}
              </Typography>
              <div className={classes.features}>
                <ul>
                  {[activeTab.feature1, activeTab.feature2, activeTab.feature3].map((feature, index) => (
                    <li key={index} className={classes.featureItem}>
                      {/* <CheckCircleTwoTone className={classes.featureIcon} style={{fontSize: "50px"}} /> */}
                      <Typography className={classes.featureText}  style={{fontSize: "30px", color: "white"}}>{feature}</Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={classes.imageWrapper}>
              <Image
                src={activeTab.image}
                width={930}
                height={500}
                alt="logo"
                className={classes.image}
              />
            </div>
          </div>
        </div>
      )}
</div>
    </Box>
  );
};

export default SecondSection;
