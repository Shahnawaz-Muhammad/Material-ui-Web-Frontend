import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      alignContent: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'auto',
    },
    paperContainer: {
      marginBottom: '5rem',
      marginTop: theme.spacing(-7),
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(-3),
      },
    },
    heading: {
      '& .MuiTypography-root': {
        textAlign: 'center',
        padding: '2rem',
        fontSize: '2rem',
        fontWeight: 'bolder',
        color: '#333333',
      },
    },
    gridContainer: {
      padding: '2rem',
      maxWidth: '90vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardContainer: {
      maxWidth: '400px',
    },
    card: {
      textAlign: 'center',

      '& .MuiSvgIcon-root': {
        marginBottom: '2rem',
        color: '#6f5de7',
        fontSize: '2rem',
        '&.hover': {
          backgroundColor: '#f1f5fd',
        },
      },
    },
    cardContent: {
      // padding: `3px ${theme.spacing(4)}px`,
      maxWidth: '300px',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardTitle: {
      marginBottom: '2rem',
      '& .MuiTypography-root': {
        // fontWeight: 'bolder',
        fontSize: '1.2rem',
        color: '#333333',
      },
    },
    icon: {
      padding: '2rem',
      '& .MuiIcon-root': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3f2fd',
        padding: theme.spacing(3),
        borderRadius: '50%',
      },
    },
  })
);
const HowItWorks = () => {
  const classes = useStyles();
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/workApi')
      .then((res) => res.json())
      .then((data) => setWorkData(data));
  }, []);

  return (
    <div className={classes.root} id='how_it_works'>
      <div className={classes.paperContainer}>
        <Paper elevation={3}>
          <div className={classes.heading}>
            <Typography variant='h4' fontWeight='bolder'>
              How Does It Works
            </Typography>
          </div>
          <Grid container className={classes.gridContainer}>
            {workData.map((item) => {
              const { id, logo, title, info } = item;
              return (
                <Grid item lg={4} key={id}>
                  <div className={classes.cardContainer}>
                    <Paper variant='outlined'>
                      <Card className={classes.card} variant='outlined'>
                        <CardContent>
                          <div className={classes.cardContent}>
                            <div className={classes.icon}>
                              <Icon color='primary'>{logo}</Icon>
                            </div>
                            <div className={classes.cardTitle}>
                              <Typography variant='h6'>{title}</Typography>
                            </div>
                            <div>
                              <Typography variant='subtitle1'>
                                {info}
                              </Typography>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Paper>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default HowItWorks;
