import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route  } from "react-router-dom";
import Home from '../src/Pages/Home'
import SignIn from '../src/Pages/SignIn'
import SignUp from '../src/Pages/SignUp'
import BrandSignIn from '../src/Pages/BrandSignIn'
import BrandSignUp from '../src/Pages/BrandSignUp'
import InfluencerLanding from './Pages/Influencer/InfluencerLanding';
import InfluencerSocials from './Pages/Influencer/InfluencerSocials';
import InfluencerProfile from './Pages/Influencer/InfluencerProfile';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Red Rose',
        'cursive',
      ].join(',')
    }
  })
  return (
    <ThemeProvider theme={theme} >
      <Navbar />
      
      
    <Routes>
      
      <Route path='/' element={<Home />} ></Route>
      <Route path='/SignIn' element={<SignIn />}></Route>
      <Route path='/SignUp' element={<SignUp />}></Route>
      <Route path='/BrandSignUp' element={<BrandSignUp />}></Route>
      <Route path='/BrandSignIn' element={<BrandSignIn />}></Route>
      <Route path='Influencer/InfluencerLanding' element={<InfluencerLanding />}></Route>
      <Route path='Influencer/InfluencerSocials' element={<InfluencerSocials />}></Route>
      <Route path='Influencer/InfluencerProfile' element={<InfluencerProfile />}></Route>
    </Routes>
    
    
    <Footer />
     
    </ThemeProvider>
  );
}

export default App;
