import React from 'react'
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Toolbar,Container,Box,Button, Grid, Typography } from '@mui/material';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Red Rose',
        'cursive',
      ].join(',')
    }
  })

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
        <AppBar sx={{  background: 'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)' }} >
            <Container>
                <Toolbar>
                    <img src='https://ik.imagekit.io/ugyodiq15/metabnb_logo_4dedweRgu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668218617798' alt='logo' />
                    <Box sx={{ justifyContent: 'center'}}   ml={20}>
                            

                                <Button sx={{fontStyle: 'normal',
                                            fontWeight: '300',
                                            fontSize: '15px',
                                            lineHeight: '25px',
                                            color: '#434343'}}>Home</Button> 

                            <Button sx={{fontFamily: 'Red Rose',
                                            fontStyle: 'normal',
                                            fontWeight: '300',
                                            fontSize: '15px',
                                            lineHeight: '25px',
                                            color: '#434343'}}>Place to stay</Button>
                            
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
borderRadius: '10px'}}>Connect Wallet</Button>
                    </Box>
                        
                    
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
  )
}

export default Navbar