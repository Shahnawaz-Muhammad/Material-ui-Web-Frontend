import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@material-ui/core';

const Form = () => {
  const [cities, setCities] = useState([
    'Select',
    'Karachi',
    'Islamabad',
    'Lahore',
    'Peshawar',
    'Quetta',
    'Skardu',
  ]);
  const [selectedCity, setSelectedCity] = useState('Select');
  const [firstName, setFirstName] = useState('');
  const [gender, setGender] = useState('male');
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert('Invalid Info');
    } else {
      window.alert('Succesfull');
      history.push('http://localhost:8008/users');
    }
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={2}></Grid>
        <Grid item lg={8}>
          <form method='POST' onSubmit={handleSubmit}>
            <TextField
              name='firstName'
              value={firstName}
              label='First Name'
              onChange={(e) => setFirstName(e.target.value)}
              variant='outlined'
            />
            <br />
            {/* <FormControl>
              <Select
                label='City'
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
            <FormControl>
              <RadioGroup
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='Male'
                />
                <FormControlLabel
                  value='female'
                  control={<Radio />}
                  label='Female'
                />
                <FormControlLabel
                  value='other'
                  control={<Radio />}
                  label='Other'
                />
              </RadioGroup>
            </FormControl> */}
            <br />
            <Button onSubmit={handleSubmit} variant='contained' type='submit'>
              Submit
            </Button>
          </form>
        </Grid>
        <Grid item lg={2}></Grid>
      </Grid>
    </div>
  );
};

export default Form;
