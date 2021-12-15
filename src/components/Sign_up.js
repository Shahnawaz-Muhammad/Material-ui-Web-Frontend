import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '3rem 2rem',
    },
    container: {
      width: '80%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      marginBottom: '2rem',
      '& .MuiTypography-root': {
        color: '#333333',
        fontWeight: 'bolder',
      },
    },
    infoContainer: {
      marginBottom: '2rem',
      '& .MuiTypography-root': {
        color: '#828286',
        fontWeight: 'lighter',
      },
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '250px',
      height: '300px',
    },
    inputField: {
      '& .MuiTextField-root': {
        width: '100%',
      },
    },
    btnSubmit: {
      width: '50%',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& .MuiButton-root': {
        width: '100%',
        borderRadius: '20px',

        '&:hover': {
          backgroundColor: '#6f5de7',
          color: '#fff',
        },
      },
    },
    checkbox: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    formContainer: {
      padding: '30px',
    },
    textField: {
      width: '48%',
      margin: '10px 5px',
      [theme.breakpoints.down('lg')]: { width: '48%' },

      [theme.breakpoints.down('sm')]: { width: '100%' },

      '& .MuiInputBase-root': {},
    },
    textFieldFull: {
      width: '97%',
      margin: '10px 5px',
      '& .MuiInputBase-root': {},
    },
  })
);

const Signup = () => {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    let data = { firstName, lastName, email, phone, address, message };
    fetch('http://localhost:3000/howToApi', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.log('resp:', resp);
      });
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={12} sm={4} lg={3}>
            <div className={classes.title}>
              <Typography variant='h5'> Connect With Our Sales Team</Typography>
            </div>
            <div className={classes.infoContainer}>
              <Typography variant='subtitle1'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia
                quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Typography>
            </div>
            <div className={classes.imageContainer}>
              <img
                src='./images/hero1.jpg'
                alt='pic'
                className={classes.image}
              />
            </div>
          </Grid>
          <Grid item xs sm={8} lg className={classes.formContainer}>
            <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <TextField
                className={classes.textField}
                variant='outlined'
                label='First Name'
                // onChange={(e) => setFirstName(e.target.value)}
                name='firstName'
                {...register('firstName', {
                  required: 'First Name is Required.',
                  minLength: {
                    value: 3,
                    message: 'Invalid First Name',
                  },
                })}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName?.message}
              />
              <TextField
                className={classes.textField}
                variant='outlined'
                label='Last Name'
                name='lastName'
                {...register('lastName', {
                  required: 'Last Name is Required.',
                  minLength: {
                    value: 3,
                    message: 'Invalid Last Name',
                  },
                })}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName?.message}
                // onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                className={classes.textField}
                variant='outlined'
                label='Email'
                name='email'
                {...register('email', {
                  required: 'Email is Required.',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid email address',
                  },
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                className={classes.textField}
                variant='outlined'
                label='Phone Number'
                name='phoneNumber'
                {...register('phoneNumber', {
                  required: 'Phone Number is Required.',
                  minLength: {
                    value: 11,
                    message: 'Phone number should be minimum 11',
                  },
                  maxLength: {
                    value: 12,
                    message: 'Phone number exceeds',
                  },
                })}
                error={Boolean(errors.phoneNumber)}
                helperText={errors.phoneNumber?.message}
                // onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <TextField
                className={classes.textFieldFull}
                variant='outlined'
                label='Address'
                fullWidth
                name='address'
                {...register('address', {
                  required: 'Address is Required.',
                })}
                error={Boolean(errors.address)}
                helperText={errors.address?.message}
                // onChange={(e) => setAddress(e.target.value)}
              />
              <TextField
                className={classes.textFieldFull}
                variant='outlined'
                label='Message'
                fullWidth
                name='message'
                {...register('message', {
                  required: 'Message is Required.',
                })}
                error={Boolean(errors.message)}
                helperText={errors.message?.message}
                // onChange={(e) => setMessage(e.target.value)}
              />
              <Button variant='contained' color='primary' type='submit'>
                {' '}
                Submit{' '}
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Signup;
