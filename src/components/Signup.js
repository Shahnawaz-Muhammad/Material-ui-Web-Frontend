import React from 'react';
// import { useForm } from 'react-hook-form';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
} from '@material-ui/core';

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
  })
);

const Signup = () => {
  const classes = useStyles();
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    message: '',
    remember: true,
    checkRemember: [],
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
          <Grid item xs sm={8} lg>
            <Formik
              initialValues={initialValues}
              onSubmit={(values, formikHelpers) => {
                console.log(values);
                formikHelpers.resetForm();
              }}
              validationSchema={yup.object().shape({
                firstName: yup
                  .string()
                  .required('Please Enter Your First Name')
                  .min(2, 'Name too short'),
                lastName: yup
                  .string()
                  .required('Please Enter Your Last Name')
                  .min(2, 'Name too short'),
                email: yup
                  .string()
                  .required('Please Enter Your Email')
                  .email('Invalid email'),
                phoneNumber: yup
                  .number()
                  .required('Please Enter Your Phone Number')
                  .positive()
                  .integer()
                  .min(11, 'Number exceeded'),
                address: yup
                  .string()
                  .required('Please Enter Your Address')
                  .min(5, 'Address too short'),
                message: yup
                  .string()
                  .required('Please Enter Your Message')
                  .min(5, 'Name too short'),
              })}
            >
              {({ errors, isValid, touched, dirty }) => (
                <Form>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} lg={6}>
                      <div className={classes.inputField}>
                        <Field
                          as={TextField}
                          type='text'
                          name='firstName'
                          label='First Name'
                          variant='outlined'
                          error={Boolean(errors.firstName && touched.firstName)}
                          helperText={Boolean(
                            touched.firstName && errors.firstName
                          )}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      <div className={classes.inputField}>
                        <Field
                          as={TextField}
                          type='text'
                          name='lastName'
                          label='Last Name'
                          variant='outlined'
                          error={Boolean(errors.lastName && touched.lastName)}
                          helperText={Boolean(
                            touched.lastName && errors.lastName
                          )}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      <div className={classes.inputField}>
                        <Field
                          as={TextField}
                          type='email'
                          name='email'
                          label='Email'
                          variant='outlined'
                          error={Boolean(errors.email && touched.email)}
                          helperText={Boolean(touched.email && errors.email)}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      <div className={classes.inputField}>
                        <Field
                          as={TextField}
                          type='text'
                          name='phoneNumber'
                          label='Phone Number'
                          variant='outlined'
                          error={Boolean(
                            errors.phoneNumber && touched.phoneNumber
                          )}
                          helperText={Boolean(
                            touched.phoneNumber && errors.phoneNumber
                          )}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={12} fullWidth>
                      <div className={classes.inputField}>
                        <Field
                          as={TextField}
                          type='text'
                          name='address'
                          label='Address'
                          error={Boolean(errors.address && touched.address)}
                          helperText={Boolean(
                            touched.address && errors.address
                          )}
                          variant='outlined'
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={12} fullWidth>
                      <div className={classes.inputField}>
                        <Field
                          as={TextField}
                          type='text'
                          label='Enter Your Message'
                          name='message'
                          variant='outlined'
                          error={Boolean(errors.message && touched.message)}
                          helperText={Boolean(
                            touched.message && errors.message
                          )}
                        />
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      lg={12}
                      className={classes.checkbox}
                    >
                      <FormControlLabel
                        name='remember'
                        control={
                          <Checkbox name='checkRemember' color='primary' />
                        }
                      />
                      <Typography>Turn on Email Notification</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                      <div className={classes.btnSubmit}>
                        <Button
                          variant='outlined'
                          color='primary'
                          type='submit'
                          disabled={!dirty || !isValid}
                        >
                          Submit{' '}
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Signup;
