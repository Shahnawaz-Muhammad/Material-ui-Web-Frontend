import React from 'react';
import Navbar from '../src/components/Navbar';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import PageHeader from './components/PageHeader';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Services from './components/Services';
// import Sign_up from './components/Sign_up';

import Footer from './components/Footer';
import Form from './components/Form';

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins',
    },
    listItemText: {
      fontFamily: 'Poppins',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <PageHeader />
        <HowItWorks />
        <About />
        <Services />
        {/* <Sign_up /> */}
        <Form />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
