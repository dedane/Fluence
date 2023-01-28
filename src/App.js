import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route, Switch,  } from "react-router-dom";
import Home from '../src/Pages/Home'
import Place from '../src/Pages/Place'

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
      <Switch>
    <Routes>
      
      <Route path='/' element={<Home />} ></Route>
      <Route path='/place' element={<Place />}></Route>
      
    </Routes>
    </Switch>
    <Footer />
     
    </ThemeProvider>
  );
}

export default App;
