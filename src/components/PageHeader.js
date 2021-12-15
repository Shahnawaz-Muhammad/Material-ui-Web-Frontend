import { Button, Grid, InputBase, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#f1f5fd',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: theme.spacing(7),
    },
    leftContainer: {
      alignItems: 'center',
      alignContent: 'center',
      marginLeft: '100px',
    },
    leftHeading: {
      '& .MuiTypography-root': {
        fontWeight: 'bolder',
        color: '#333333',
        fontSize: '1.5rem',
      },
    },
    leftDescription: {
      width: '75%',
      margin: '3rem 0 5rem 0',
      fontWeight: 'lighter',
      fontSize: '.9rem',
      color: '#828286',
    },
    leftSubscriptionTitle: {
      color: '#333333',
      '& .MuiTypography-root': {
        fontSize: '1rem',
      },
    },
    leftSubscriptionInput: {
      //   opacity: '0.6',
      fontSize: '0.8rem',
      padding: `0px 0px 0px ${theme.spacing(1)}px`,
      color: '#000',
      borderRadius: '20px',
      width: '70%',
      backgroundColor: '#fff',
      height: '40px',
      marginTop: '10px',

      '& .MuiButton-root': {
        // marginRight: theme.spacing(1),
        borderRadius: '20px',
        height: '40px',
        fontSize: '.6rem',
        width: '30%',
        backgroundColor: '#6f5de7',
        '&:hover': {
          opacity: 0.8,
        },
      },
    },
    rightImg: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightImg1: {
      //   position: 'absolute',
      marginTop: '5rem',
      borderRadius: '1.5rem',
      width: '50%',
      height: '80%',
    },
    rightImg2: {
      position: 'absolute',
      left: '30%',
      top: '40px',
      borderRadius: '1.5rem',
      width: '40%',
      height: '25%',
    },
  })
);
const PageHeader = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root} id='home'>
        <Grid item sm={7} lg={7}>
          <div className={classes.leftContainer}>
            <div className={classes.leftHeading}>
              <Typography variant='h4'>Online Payment Mode</Typography>
              <Typography variant='h4'>Easy For You</Typography>
            </div>
            <div>
              <Typography
                variant='subtitle1'
                className={classes.leftDescription}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Typography>
            </div>
            <div className={classes.leftSubscriptionTitle}>
              <Typography variant='h5'>Get Early Access For you</Typography>
              <InputBase
                placeholder='Enter Your Email'
                className={classes.leftSubscriptionInput}
                endAdornment={
                  <Button variant='contained' color='primary'>
                    Get it Now
                  </Button>
                }
              />
            </div>
          </div>
        </Grid>
        <Grid item sm={5} lg={4}>
          <div className={classes.rightImg}>
            <div>
              <img
                className={classes.rightImg1}
                src='./images/hero1.jpg'
                alt='pic'
              />
            </div>
            <div>
              <img
                className={classes.rightImg2}
                src='./images/hero4.jpg'
                alt='img2'
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default PageHeader;
