import { Button, Grid, Typography, Box, Divider, Dialog, DialogTitle, DialogContent, DialogActions, Slide, DialogContentText, TextField  } from "@mui/material";
import { CalendarDays, CalendarMinus, Gauge, Check, Infinity, InfinityIcon, Clock } from "lucide-react";
import React, { useState } from "react";
import './fpage.css'
import { makeStyles } from '@mui/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
        transition: 'transform 300ms ease-in-out',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.05)', // Scale factor for hover effect
        },
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

const FirstSection = () => {
  const classes = useStyles();
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const togglePlan = () => {
    setIsMonthlyPlan(!isMonthlyPlan);
  };

  return (
    <div className={classes.containerss} >
      <div className="space-y-6 flex flex-col text-center pt-20 px-10 md:px-0">
        <Typography variant="h3">Unleash the Power of Unlimited Connectivity</Typography>
        <Typography variant="h5" color="textSecondary">Residential unlimited Packages</Typography>
      </div>

      <div style={{ marginTop: "40px" }}>
      <Grid container justifyContent="center" spacing={2} >
        <Grid item>
          <Button
            variant={isMonthlyPlan ? "contained" : "outlined"}
            onClick={() => setIsMonthlyPlan(true)}
            fullWidth
            className={isMonthlyPlan ? "shake-on-hover red-bg" : ""}
            style={{ height: "80px", width: "180px", fontSize: "3.2rem" , backgroundColor: '#E32522', color: "white" }}
          >
            <CalendarMinus size={24} />
            <Typography variant="h6">Monthly</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={!isMonthlyPlan ? "contained" : "outlined"}
            onClick={() => setIsMonthlyPlan(false)}
            fullWidth
            className={!isMonthlyPlan ? "shake-on-hover black-bg" : ""}
            style={{ height: "80px", width: "180px", fontSize: "3.2rem", backgroundColor: '#000000' }}
          >
            <CalendarDays size={24} color="white"/>
            <Typography variant="h6" color={"white"}>Yearly</Typography>
          </Button>
        </Grid>
      </Grid>
    </div>

    <div style={{ marginTop: "30px" }} className={classes.container}>
      <Grid container justifyContent="center" spacing={3} >
      <Grid item xs={12} md={6} lg={3} >
      <Box  p={3} className={`${classes.card} ${classes.backgroundCard}`}>
        <Typography variant="h4" style={{color: "#ffffff", fontSize: "2.7rem"}}>MEGA</Typography>
        <br/>
        <Typography variant="h2" style={{ color: '#ffffff'}}>{isMonthlyPlan ? "$93" : "$1,116"}</Typography>
        <Typography variant="body1" style={{fontSize: "1.5rem", color: "#ffffff"}}>{isMonthlyPlan ? "Per Month" : "Yearly"}</Typography>
        <br/>
        <Button variant="contained"  fullWidth style={{ backgroundColor: '#ffffff', fontSize: "1.5rem", color: "#000000"}} onClick={handleOpenDialog}>Contact Sales</Button>
        <Typography variant="subtitle1" style={{color: "#ffffff", fontSize: "1.2rem"}}>Purchase Now</Typography>
        <div style={{marginTop: "2rem"}} >
          <Divider style={{backgroundColor: '#ffffff', fontSize: "4rem", height: "0.2rem"}} />
          <br/>
          
          <Typography variant="body1" style={{color: "#ffffff", fontSize: "1.4rem", fontWeight: "bolder"}}>Items In Your Package:</Typography>
          <br/>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Grid container alignItems="center" gap={"20px"}>
                <Gauge size={70} color="#ffffff" />
                <Typography variant="body2" style={{color: "#ffffff", fontSize: "1.4rem"}}> 7+ Mbps Speed</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container alignItems="center" gap={"20px"}>
                <InfinityIcon size={70} color="#ffffff" />
                <Typography variant="body2" style={{color: "#ffffff", fontSize: "1.4rem"}}>Unlimited Data</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} style={{marginTop: "20px"}}>
              <Grid container alignItems="center" gap={"20px"}>
                <Clock size={70} color="#ffffff" />
                <Typography variant="body2" style={{color: "#ffffff", fontSize: "1.4rem"}}>24 / 7 Support</Typography>
              </Grid>
            </Grid>
          </Grid>
          
        </div>

        {/* Dialog for Contact Sales */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          TransitionComponent={Transition}
          keepMounted
          aria-labelledby="contact-sales-dialog-title"
          // BackdropProps={{ invisible: true }}
          maxWidth="lg" // Set the maximum width of the dialog
            fullWidth // Make the dialog full width

            PaperProps={{
              style: {
                position: 'absolute',
                top: '100px', // Adjust the top distance here
                left: '50%',
                transform: 'translateX(-50%)',
                height: '700px', // Set the maximum height of the dialog
              },
            }}
        >
          <DialogTitle id="contact-sales-dialog-title">Contact Sales</DialogTitle>
          <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">Close</Button>
            <Button type="submit">Subscribe</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Grid>

      
        {/* Another  Section Begins */}

        <Grid item xs={12} md={6} lg={3} >
      <Box  p={3} className={`${classes.card} ${classes.backgroundCard}`}>
        <Typography variant="h4" style={{color: "#ffffff", fontSize: "2.7rem"}}>OPTIMUM</Typography>
        <br/>
        <Typography variant="h2" style={{ color: '#ffffff'}}>{isMonthlyPlan ? "$146" : "$1,752"}</Typography>
        <Typography variant="body1" style={{fontSize: "1.5rem", color: "#ffffff"}}>{isMonthlyPlan ? "Per Month" : "Yearly"}</Typography>
        <br/>
        <Button variant="contained"  fullWidth style={{ backgroundColor: '#ffffff', fontSize: "1.5rem", color: "#000000"}} onClick={handleOpenDialog}>Contact Sales</Button>
        <Typography variant="subtitle1" style={{color: "#ffffff", fontSize: "1.2rem"}}>Purchase Now</Typography>
        <div style={{marginTop: "2rem"}} >
          <Divider style={{backgroundColor: '#ffffff', fontSize: "4rem", height: "0.2rem"}} />
          <br/>
          
          <Typography variant="body1" style={{color: "#ffffff", fontSize: "1.4rem", fontWeight: "bolder"}}>Items In Your Package:</Typography>
          <br/>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Grid container alignItems="center" gap={"20px"}>
                <Gauge size={70} color="#ffffff" />
                <Typography variant="body2" style={{color: "#ffffff", fontSize: "1.4rem"}}> 9+ Mbps Speed</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container alignItems="center" gap={"20px"}>
                <InfinityIcon size={70} color="#ffffff" />
                <Typography variant="body2" style={{color: "#ffffff", fontSize: "1.4rem"}}>Unlimited Data</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} style={{marginTop: "20px"}}>
              <Grid container alignItems="center" gap={"20px"}>
                <Clock size={70} color="#ffffff" />
                <Typography variant="body2" style={{color: "#ffffff", fontSize: "1.4rem"}}>24 / 7 Support</Typography>
              </Grid>
            </Grid>
          </Grid>
          
        </div>

        {/* Dialog for Contact Sales */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          TransitionComponent={Transition}
          keepMounted
          aria-labelledby="contact-sales-dialog-title"
          // BackdropProps={{ invisible: true }}
          maxWidth="lg" // Set the maximum width of the dialog
            fullWidth // Make the dialog full width

            PaperProps={{
              style: {
                position: 'absolute',
                top: '100px', // Adjust the top distance here
                left: '50%',
                transform: 'translateX(-50%)',
                height: '700px', // Set the maximum height of the dialog
              },
            }}
        >
          <DialogTitle id="contact-sales-dialog-title">Contact Sales</DialogTitle>
          <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">Close</Button>
            <Button type="submit">Subscribe</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Grid>

           {/* Another  Section Ends */}


            {/* Another  Section Begins */}

        <Grid item xs={12} md={6} lg={3} >
      <Box  p={3} className={`${classes.card} ${classes.backgroundCard}`}>
        <Typography variant="h4" style={{color: "#ffffff", fontSize: "2.7rem"}}>PREMIUM</Typography>
        <br/>
        <Typography variant="h2" style={{ color: '#ffffff'}}>{isMonthlyPlan ? "$261" : "$3,132"}</Typography>
        <Typography variant="body1" style={{fontSize: "1.5rem", color: "#ffffff"}}>{isMonthlyPlan ? "Per Month" : "Yearly"}</Typography>
        <br/>
        <Button variant="contained"  fullWidth style={{ backgroundColor: '#ffffff', fontSize: "1.5rem", color: "#000000"}} onClick={handleOpenDialog}>Contact Sales</Button>
        <Typography variant="subtitle1" style={{color: "#ffffff", fontSize: "1.2rem"}}>Purchase Now</Typography>
        <div style={{marginTop: "2rem"}} >
          <Divider style={{backgroundColor: '#ffffff', fontSize: "4rem", height: "0.2rem"}} />
          <br/>
          
          <Typography variant="body1" style={{color: "#ffffff", fontSize: "1.4rem", fontWeight: "bolder"}}>Items In Your Package:</Typography>
          <br/>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Grid container alignItems="center" gap={"20px"}>
                <Gauge size={70} color="#ffffff" />
                <Typography variant="body2" style={{color: "#ffffff", fontSize: "1.4rem"}}> 15+ Mbps Speed</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container alignItems="center" gap={"20px"}>
                <InfinityIcon size={70} color="#ffffff" />
                <Typography variant="body2" style={{color: "#ffffff", fontSize: "1.4rem"}}>Unlimited Data</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} style={{marginTop: "20px"}}>
              <Grid container alignItems="center" gap={"20px"}>
                <Clock size={70} color="#ffffff" />
                <Typography variant="body2" style={{color: "#ffffff", fontSize: "1.4rem"}}>24 / 7 Support</Typography>
              </Grid>
            </Grid>
          </Grid>
          
        </div>

        {/* Dialog for Contact Sales */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          TransitionComponent={Transition}
          keepMounted
          aria-labelledby="contact-sales-dialog-title"
          BackdropProps={{ invisible: true }}
          maxWidth="lg" // Set the maximum width of the dialog
            fullWidth // Make the dialog full width

            PaperProps={{
              style: {
                position: 'absolute',
                top: '100px', // Adjust the top distance here
                left: '50%',
                transform: 'translateX(-50%)',
                height: '700px', // Set the maximum height of the dialog
              },
            }}
        >
          <DialogTitle id="contact-sales-dialog-title">Contact Sales</DialogTitle>
          <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">Close</Button>
            <Button type="submit">Subscribe</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Grid>

           {/* Another  Section Ends */}
       


        {/* Another  Section Begins */}

        <Grid item xs={12} md={6} lg={3} >
      <Box  p={3} className={`${classes.card} ${classes.backgroundCard}`}>
        <Typography variant="h4" style={{color: "#ffffff", fontSize: "2.7rem"}}>ELITE</Typography>
        <br/>
        <Typography variant="h2" style={{ color: '#ffffff'}}>{isMonthlyPlan ? "$486" : "$5,832"}</Typography>
        <Typography variant="body1" style={{fontSize: "1.5rem", color: "#ffffff"}}>{isMonthlyPlan ? "Per Month" : "Yearly"}</Typography>
        <br/>
        <Button variant="contained"  fullWidth style={{ backgroundColor: '#ffffff', fontSize: "1.5rem", color: "#000000"}} onClick={handleOpenDialog}>Contact Sales</Button>
        <Typography variant="subtitle1" style={{color: "#ffffff", fontSize: "1.2rem"}}>Purchase Now</Typography>
        <div style={{marginTop: "2rem"}} >
          <Divider style={{backgroundColor: '#ffffff', fontSize: "4rem", height: "0.2rem"}} />
          <br/>
          
          <Typography variant="body1" style={{color: "#ffffff", fontSize: "1.4rem", fontWeight: "bolder"}}>Items In Your Package:</Typography>
          <br/>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Grid container alignItems="center" gap={"20px"}>
                <Gauge size={70} color="#ffffff" />
                <Typography variant="body2" style={{color: "#ffffff", fontSize: "1.4rem"}}> 15+ Mbps Speed</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container alignItems="center" gap={"20px"}>
                <InfinityIcon size={70} color="#ffffff" />
                <Typography variant="body2" style={{color: "#ffffff", fontSize: "1.4rem"}}>Unlimited Data</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} style={{marginTop: "20px"}}>
              <Grid container alignItems="center" gap={"20px"}>
                <Clock size={70} color="#ffffff" />
                <Typography variant="body2" style={{color: "#ffffff", fontSize: "1.4rem"}}>24 / 7 Support</Typography>
              </Grid>
            </Grid>
          </Grid>
          
        </div>

        {/* Dialog for Contact Sales */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          TransitionComponent={Transition}
          keepMounted
          aria-labelledby="contact-sales-dialog-title"
          BackdropProps={{ invisible: true }}
          maxWidth="lg" // Set the maximum width of the dialog
            fullWidth // Make the dialog full width

            PaperProps={{
              style: {
                position: 'absolute',
                top: '100px', // Adjust the top distance here
                left: '50%',
                transform: 'translateX(-50%)',
                height: '700px', // Set the maximum height of the dialog
              },
            }}
        >
          <DialogTitle id="contact-sales-dialog-title">Contact Sales</DialogTitle>
          <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">Close</Button>
            <Button type="submit">Subscribe</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Grid>

           {/* Another  Section Ends */}
       
       
      </Grid>
    </div>
    </div>
  );
};

export default FirstSection;
