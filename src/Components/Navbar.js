import React from 'react'
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Toolbar,Container,Box,Button,  Typography } from '@mui/material';
import { Link } from "react-router-dom";

const theme = createTheme({
    typography: {
      fontFamily: [
        'Red Rose',
        'cursive',
      ].join(',')
    }
  })

function Navbar({to, label}) {
  return (
    <ThemeProvider theme={theme}>
        <AppBar sx={{  background: 'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)' }}>
            <Container>
                <Toolbar>
                    <img src='https://ik.imagekit.io/ugyodiq15/metabnb_logo_4dedweRgu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668218617798' alt='logo' />
                    
                    <Box ml={15} justifyContent='center' alignItems='center'>  
                    <Button  component={Link} style={{fontFamily: 'Red Rose',
                                            fontStyle: 'normal',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            fontWeight: '400',
                                            fontSize: '17px',
                                            lineHeight: '25px',
                                            textDecoration:'none',
                                            color: '#434343'}}
                                            to='/'>Home</Button>
                            <Button component={Link} style={{fontFamily: 'Red Rose',
                                            fontStyle: 'normal',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            fontWeight: '400',
                                            fontSize: '17px',
                                            lineHeight: '25px',
                                            textDecoration:'none',
                                            color: '#434343'}}
                                            to='/place'>Place to stay</Button>
                            
                            <Button sx={{fontFamily: 'Red Rose',fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '15px',
                                            lineHeight: '25px',
                                            color: '#434343'}}>NFTs</Button>
                            
                            <Button sx={{fontFamily: 'Red Rose',fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '15px',
                                            lineHeight: '25px',
                                            color: '#434343'}}> <Typography sx={{fontFamily: 'Red Rose'}}> Community</Typography></Button>
                            
                            </Box>      
                    <Box ml={20}>
                             <Button   variant='contained'  sx={{background: 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)',
borderRadius: '10px'}} >Connect Wallet</Button>
                    </Box>
                    
                        
                    
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
  )
}

export default Navbar