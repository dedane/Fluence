import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";
import Home from '../src/Pages/Home'
//import Place from '../src/Pages/Place'

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
    
    <Routes>
      <Navbar />
      <Route path='/' element={<Home />} ></Route>
      {/* <Route path='/place' element={<Place />}></Route> */}
      <Footer />
    </Routes>
     
    </ThemeProvider>
  );
}

export default App;
