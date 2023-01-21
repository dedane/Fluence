import React from 'react'
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Toolbar,Container,Box,Modal,Button,List,Divider,ListItem, Typography } from '@mui/material';
import { Link } from "react-router-dom";

const theme = createTheme({
    typography: {
      fontFamily: [
        'Red Rose',
        'cursive',
      ].join(',')
    }
  })
  

 
  const drawerWidth = 240;

function Navbar({to, label}) {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
       
          <ListItem >
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
          </ListItem>
          <ListItem>
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
                            
          </ListItem>
          <ListItem>
          <Button sx={{fontFamily: 'Red Rose',fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '15px',
                                            lineHeight: '25px',
                                            color: '#434343'}}>NFTs</Button>
          </ListItem>
          <ListItem>
          <Button sx={{fontFamily: 'Red Rose',fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '15px',
                                            lineHeight: '25px',
                                            color: '#434343'}}> <Typography sx={{fontFamily: 'Red Rose'}}> Community</Typography></Button>
          </ListItem>
          <ListItem>
          <Button   variant='contained'  sx={{background: 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)',
borderRadius: '10px'}} >Connect Wallet</Button>

          </ListItem>
        
      </List>
    </Box>
  );
  
  return (
    <ThemeProvider theme={theme}>
        <AppBar sx={{  background: 'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)' }}>
            <Container>
                <Toolbar>
                    <img src='https://ik.imagekit.io/ugyodiq15/metabnb_logo_4dedweRgu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668218617798' alt='logo' />
                    
                    <Box ml={15} justifyContent='center' alignItems='center' sx={{display: { xs: 'none', sm: 'block' }}}>  
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
<Modal>
      <Box>
        <Typography>
          Connect Wallet
        </Typography>
        <Divider />
        <Typography>Choose your preferred wallet</Typography>
        <Button>Metamask</Button>
        <Button></Button>
      </Box>

</Modal>
                    </Box>
                    
                        
                    
                </Toolbar>
            </Container>
        </AppBar>
        <Box component="nav">
        <Drawer
          
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </ThemeProvider>
  )
}

export default Navbar