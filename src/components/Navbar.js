import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {
  AppBar,
  Button,
  Grid,
  Icon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: '#f1f5fd',
      width: '100%',
    },
    brand: {
      color: '#000',
      textAlign: 'center',
      fontWeight: 'bolder',

      [theme.breakpoints.down('xs')]: {
        textAlign: 'left',
        fontSize: '2rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    navList: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      [theme.breakpoints.down('xs')]: { display: 'none' },
      '& .MuiTypography-root': {
        justifyContent: 'flex-end',
        color: '#000',
        fontWeight: 'bolder',
      },
    },
    btn: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: { display: 'none' },
      [theme.breakpoints.down('lg')]: {
        padding: '0 4px',
        // justifyContent: 'space-between',
      },
    },
    btnSignup: {
      width: '50%',

      '& .MuiButton-root': {
        width: '80%',
        borderRadius: '20px',
        backgroundColor: '#6f5de7',
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
          padding: '4px 6px',
          fontSize: '12px',
        },

        '&:hover': {
          backgroundColor: 'transparent',
          color: '#333333',
        },
      },
    },
    btnSignin: {
      width: '50%',
      '& .MuiButton-root': {
        width: '80%',
        borderRadius: '20px',
        [theme.breakpoints.down('sm')]: {
          padding: '4px 6px',
          fontSize: '12px',
        },
        '&:hover': {
          backgroundColor: '#6f5de7',
          color: '#fff',
        },
      },
    },
    btnDropDown: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.up('sm')]: { display: 'none' },
    },
    dropDownMenu: {
      padding: '2rem 0',
      '& .MuiPaper-root': {
        paddingLeft: '0',
        paddingBottom: theme.spacing(2),
        width: '100vw',
        height: 'auto',
        display: 'flex',
        marginLeft: '0px',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: '#f1f5fd',
      },
    },
    btnMenu: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .MuiButton-root': {
        margin: `0 ${theme.spacing(1)}px`,
      },
    },
  })
);

const Navbar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <Grid container justifyContent='center' alignItems='center'>
            <Grid item xs={10} sm={2} lg={3}>
              <Typography variant='h5' className={classes.brand}>
                Dev Solutions
              </Typography>
            </Grid>
            <Grid item xs={0} sm={7} lg={6}>
              <div className={classes.navList}>
                <Typography>
                  {' '}
                  <Link
                    activeClass='active'
                    to='home'
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    delay={1000}
                  >
                    Home
                  </Link>
                </Typography>
                <Typography>
                  <Link
                    activeClass='active'
                    to='how_it_works'
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-40}
                    duration={500}
                    delay={1000}
                  >
                    How it Works
                  </Link>
                </Typography>
                <Typography>
                  <Link
                    activeClass='active'
                    to='about'
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    delay={1000}
                  >
                    About
                  </Link>
                </Typography>
                <Link
                  activeClass='active'
                  to='services'
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  delay={1000}
                >
                  <Typography>Services</Typography>
                </Link>
              </div>
            </Grid>
            <Grid item xs={0} sm={3} lg={3}>
              <div className={classes.btn}>
                <div className={classes.btnSignup}>
                  <Button variant='contained'>Sign Up</Button>
                </div>
                <div className={classes.btnSignin}>
                  <Button variant='outlined'>Sign In</Button>
                </div>
              </div>
            </Grid>
            <Grid item xs>
              <Button onClick={handleClick} className={classes.btnDropDown}>
                <Icon>dehaze</Icon>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Menu
        className={classes.dropDownMenu}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Services</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
        <div className={classes.btnMenu}>
          <div className={classes.btnSignup}>
            <Button variant='contained'>Sign Up</Button>
          </div>
          <div className={classes.btnSignin}>
            <Button variant='outlined'>Sign In</Button>
          </div>
        </div>
      </Menu>
    </>
  );
};

export default Navbar;
