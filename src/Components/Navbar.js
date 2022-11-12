import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Toolbar,Container,Box,Button } from '@mui/material';

function Navbar() {
  return (
    <div>
        <AppBar sx={{  background: 'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)' }} >
            <Container>
                <Toolbar>
                    <img src='https://ik.imagekit.io/ugyodiq15/metabnb_logo_4dedweRgu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668218617798' alt='logo' />
                    <Box sx={{ justifyContent: 'flex-end' }}>
                        <Button>Place to stay</Button>
                        <Button>NFTs</Button>
                        <Button>Community</Button>
                        <Button variant='contained'  sx={{background: 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)',
borderRadius: '10px'}}>Connect Wallet</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </div>
  )
}

export default Navbar