import React from 'react';
import './Styles.scss';
import NavBar from '../../components/navBar/NavBar';
import Section1 from '../../components/sections/Section1/Section1';
import Section2 from '../../components/sections/Section2/Section2';
import Section7 from '../../components/sections/Section7/Section7';
import { Box } from '@mui/material';
import Section8 from '../../components/sections/Section8/Section8';
import Section5 from '../../components/sections/Section5/Section5';
import Section6 from '../../components/sections/Section6/Section6';
import Section3 from '../../components/sections/Section3/Section3';
import Section4 from '../../components/sections/Section4/Section4';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <Box>
        <Section1/>
      </Box>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Footer/>
    </div>
  )
}

export default HomePage
