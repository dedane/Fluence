import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route  } from "react-router-dom";
import Home from '../src/Pages/Home'
import SignIn from '../src/Pages/SignIn'
import SignUp from '../src/Pages/SignUp'

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
    </Routes>
    
    
    <Footer />
     
    </ThemeProvider>
  );
}

export default App;
