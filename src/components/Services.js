import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Paper,
  Icon,
  Card,
  CardContent,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    mainHeading: {
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      '& .MuiTypography-root': {
        color: '#333333',
        fontWeight: 'bolder',
      },
    },
    gridContainer: {
      margin: `${theme.spacing(5)}px 0`,
      height: 'auto',
      width: '90%',
    },
    cardContainer: {
      width: '90%',
      marginBottom: theme.spacing(3),
      '& .MuiPaper-root': {
        width: '100%',
      },
      '&:hover': {
        background: '#e3f2fd',
      },
    },

    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '2rem',
    },
    icon: {
      margin: `${theme.spacing(2)}px 0`,
      padding: theme.spacing(1),
      backgroundColor: '#e3f2fd',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .MuiIcon-root': {
      width: '20px',
    },
    cardTitle: {
      width: '90%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
      '& .MuiTypography-root': {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#333333',
        textTransform: 'capitalize',
      },
    },
    cardDescription: {
      width: '80%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(2),
      '& .MuiTypography-root': {
        fontSize: '1rem',
        fontWeight: 'lighter',
        color: '#828286',
      },
    },
  })
);

const Services = () => {
  const classes = useStyles();
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/serviceApi')
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);

  return (
    <div className={classes.root} id='services'>
      <div className={classes.mainHeading}>
        <Typography variant='h4'>How To Send Money</Typography>
      </div>
      <div className={classes.gridContainer}>
        <Grid container>
          {serviceData.map((item) => {
            const { id, logo, title, info } = item;
            return (
              <Grid item sm={6} lg={4} key={id}>
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
                          <div className={classes.cardDescription}>
                            <Typography variant='subtitle1'>{info}</Typography>
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
      </div>
    </div>
  );
};

export default Services;
