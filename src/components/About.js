import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    firstGrid: {
      width: '100%',
      '* .MuiGrid-root': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    leftImgContainer: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    leftImg: {
      width: '30%',
      height: '75%',
      borderRadius: '20px',
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
    },
    rightContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: `0 ${theme.spacing(3)}px`,
    },
    howToContent: {
      width: '90%',
      '& .MuiGrid-root': {
        width: '80%',
      },
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    howtoSubtitle: {
      padding: `${theme.spacing(3)}px 0`,
      color: '#333333',
    },

    howToMainTitle: {
      width: '60%',
      '& .MuiTypography-root': {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: '1.5rem',
      },
    },
    howToNum: {
      '& .MuiTypography-root': {
        width: '2rem',
        textAlign: 'center',
        borderColor: 'blue',
        fontSize: '1.2rem',
        color: '#6f5de7',
      },
    },
    howToTitle: {
      '& .MuiTypography-root': {
        color: '#333333',
        fontSize: '1.2rem',
      },
    },
    howToDescription: {
      width: '90%',
      '& .MuiTypography-root': {
        fontSize: '.8rem',
        padding: `${theme.spacing(1)}px 0`,
        color: '#828286',
        fontWeight: 'lighter',
      },
    },
    btnLearnMore: {
      width: '80%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '1rem',
      '& .MuiButton-root': {
        borderRadius: '20px',
      },
    },
    secondGrid: {
      width: '100%',
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'end',
    },
  })
);

const About = () => {
  const [howTo, setHowTo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/howToApi')
      .then((res) => res.json())
      .then((data) => setHowTo(data));
  }, []);

  const classes = useStyles();
  return (
    <>
      <div className={classes.root} id='about'>
        <div className={classes.firstGrid}>
          <Grid container>
            <Grid item sm={4} lg={5}>
              <div className={classes.leftImgContainer}>
                <img
                  className={classes.leftImg}
                  src='./images/hero3.jpg'
                  alt='pic'
                />
              </div>
            </Grid>
            <Grid item sm={8} lg={7}>
              <div className={classes.rightContainer}>
                <div className={classes.howtoSubtitle}>
                  <Typography variant='subtitle1'>
                    -- AVAILABALE @ GOOGLE AND IOS APP ONLY
                  </Typography>
                </div>
                <div className={classes.howToMainTitle}>
                  <Typography variant='subtitle1'>How To Use App</Typography>
                </div>
                {howTo.map((item) => {
                  const { id, title, info } = item;
                  return (
                    <div className={classes.howToContent}>
                      <Grid container>
                        <Grid item xs={1} sm={2} lg={1}>
                          <div className={classes.howToNum}>
                            <Typography variant='h5'>{id}</Typography>
                          </div>
                        </Grid>
                        <Grid item xs sm={10} lg={9}>
                          <div className={classes.howToTitle}>
                            <Typography variant='h5'>{title}</Typography>
                          </div>
                          <div className={classes.howToDescription}>
                            <Typography variant='subtitle1'>{info}</Typography>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  );
                })}
                <div className={classes.btnLearnMore}>
                  <Button variant='outlined' color='primary'>
                    Learn More
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        {/* // Second Container */}
        <div className={classes.secondGrid}>
          <Grid container>
            <Grid item sm={8} lg={7}>
              <div className={classes.rightContainer}>
                <div className={classes.howtoSubtitle}>
                  <Typography variant='subtitle1'>
                    -- SUPPORT IN ANY LANGUAGES
                  </Typography>
                </div>
                <div className={classes.howToMainTitle}>
                  <Typography variant='subtitle1'>
                    World class support is available 24/7
                  </Typography>
                </div>
                {howTo.map((item) => {
                  const { id, title, info } = item;
                  return (
                    <div className={classes.howToContent}>
                      <Grid container>
                        <Grid item xs={1} sm={2} lg={1}>
                          <div className={classes.howToNum}>
                            <Typography variant='h5'>{id}</Typography>
                          </div>
                        </Grid>
                        <Grid item xs sm={10} lg={9}>
                          <div className={classes.howToTitle}>
                            <Typography variant='h5'>{title}</Typography>
                          </div>
                          <div className={classes.howToDescription}>
                            <Typography variant='subtitle1'>{info}</Typography>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  );
                })}
                <div className={classes.btnLearnMore}>
                  <Button variant='outlined' color='primary'>
                    Learn More
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item sm={4} lg={5} className={classes.leftContainer}>
              <div className={classes.leftImgContainer}>
                <img
                  className={classes.leftImg}
                  src='./images/callcenter.jpg'
                  alt='pic'
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default About;
