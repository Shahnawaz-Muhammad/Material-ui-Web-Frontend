import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Typography, Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 'auto',
      backgroundColor: '#182334',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerContainer: {
      width: '80%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#fff',
      padding: '2rem',
    },
    footerTitle: {
      '& .MuiTypography-root': {
        fontSize: '2rem',
        fontWeight: 'bolder',
      },
    },
    footerInfo: {
      '& .MuiTypography-root': {
        padding: `${theme.spacing(0.5)}px 0`,
      },
    },
    icon: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '1rem',
      '& .MuiIcon-root': {
        color: '#3f51b5',
      },
    },
  })
);

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.footerContainer}>
        <Grid container>
          <Grid item xs={6} lg={3}>
            <div className={classes.footerTitlefooterTitle}>
              <Typography variant='h5'>Company</Typography>
            </div>
            <div className={classes.footerInfo}>
              <Typography>about</Typography>
              <Typography>about</Typography>
              <Typography>about</Typography>
              <Typography>about</Typography>
            </div>
          </Grid>
          <Grid item xs={6} lg={3}>
            <div className={classes.footerTitlefooterTitle}>
              <Typography variant='h5'>Company</Typography>
            </div>
            <div className={classes.footerInfo}>
              <Typography>about</Typography>
              <Typography>about</Typography>
              <Typography>about</Typography>
              <Typography>about</Typography>
            </div>
          </Grid>
          <Grid item xs={6} lg={3}>
            <div className={classes.footerTitlefooterTitle}>
              <Typography variant='h5'>Company</Typography>
            </div>
            <div className={classes.footerInfo}>
              <Typography>about</Typography>
              <Typography>about</Typography>
              <Typography>about</Typography>
              <Typography>about</Typography>
            </div>
          </Grid>
          <Grid item xs={6} lg={3}>
            <div className={classes.footerTitlefooterTitle}>
              <Typography variant='h5'>Company</Typography>
            </div>
            <div className={classes.footerInfo}>
              <Typography>Follow us</Typography>
              <div className={classes.icon}>
                <Icon>facebook</Icon>
                <Icon>instagram</Icon>
                <Icon>twitter</Icon>
                <Icon>youtube</Icon>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
