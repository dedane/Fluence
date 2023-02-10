import React from 'react'
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Toolbar,Container,IconButton,ListItemText,ListItemButton, Box,Modal,Button,Grid,List,Divider,ListItem, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Navbar({to, label}) {
  const drawerWidth = 300;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  } 
  const handleClose = () => {
    setOpen(false);
  }

  const navItems = ['HOME', 'PLACE TO STAY', 'NFTS', 'COMMUNITY']
 
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      
      <List>
        
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to='/'>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to='Place'>
              <ListItemText  primary='Place' />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to='NFTS'>
              <ListItemText component={Link} primary='NFTS' />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to='COMMUNITY'>
              <ListItemText component={Link} primary='COMMUNITY' />
            </ListItemButton>
          </ListItem>
        
      </List>
      <Button   onClick={handleOpen} variant='contained'  sx={{background: 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)',
borderRadius: '10px'}} >Connect Wallet</Button>
<Modal open={open}
        onClose={handleClose}>
      <Box sx={style}>
        <Grid container mb={4} spacing={22} direction='row' alignItems='center' justifyContent='center'>
          <Grid item>
          <Typography variant="h5">
          Connect Wallet
        </Typography>
          </Grid>
          <Grid item >
            <IconButton onClick={handleClose}>
            <CloseIcon/>
            </IconButton>
          
          </Grid>
        </Grid>
        <Divider style={{width: '100%',}} />
        
        
        <Typography mb={2} >Choose your preferred wallet</Typography>
        <Grid Container spacing={20} direction='column'>
          <Grid item>
        <Button mb={4} variant="outlined" style={{textDecoration: 'none',
                        color: '#000000',
                        borderColor: '1px solid #CFD8DC',
                        bordeRadius: '12px',
                        marginBottom: '20px',
                        alignItems: 'center',
                        textAlign: 'center'}}>
          <img width='30' height='30' style={{marginRight: '20px'}} src='https://ik.imagekit.io/ugyodiq15/metamask_0ATceyyo2.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674367657708' alt='MetaMask Icon' />
          Metamask <Box alignItems={'center'} ml={26}><ArrowForwardIosIcon /></Box> </Button>
          </Grid >
          < Grid item>
          <Button variant="outlined" style={{textDecoration: 'none',
                        color: '#000000',
                        borderColor: '1px solid #CFD8DC',
                        bordeRadius: '12px',
                        marginBottom: '10px',
                        alignItems: 'center',
                        textAlign: 'center'}} >
          <img width='30' height='30' style={{marginRight: '20px'}} src='https://ik.imagekit.io/ugyodiq15/Icon_HEVITp-J2d.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674368576854' alt='walletConnect' />
          WalletConnect
        <Box ml={20}><ArrowForwardIosIcon /></Box></Button>
          </Grid>
          </Grid>
      </Box>

</Modal>
    </Box>
  );
  
  return (
    <ThemeProvider theme={theme}>
        <AppBar sx={{  background: 'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)' }}>
            <Container>
                <Toolbar>
                <IconButton
            
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
                  <Box sx={{display: { xs: 'none', sm: 'none', md: 'block' }}} >
                    <img  src='https://ik.imagekit.io/ugyodiq15/metabnb_logo_4dedweRgu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668218617798' alt='logo' />
                    </Box>
                    <Box ml={15} sx={{display: { xs: 'block', sm: 'block', md: 'none' },justifyContent:'center ', alignItems:'center'}}  >
                    <img  src='https://ik.imagekit.io/ugyodiq15/Vector__1__1AZBCSvDZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668195337551' alt='logo' />
                    </Box>
                    
                    <Box ml={15} justifyContent='center' alignItems='center' sx={{display: { xs: 'none', sm: 'none', md: 'block' }}}>  
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
                    <Box ml={20} sx={{display: { xs: 'none', sm: 'none', md: 'block' }}}>
                             <Button   onClick={handleOpen} variant='contained'  sx={{background: 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)',
borderRadius: '10px'}} >Connect Wallet</Button>
<Modal open={open}
        onClose={handleClose}>
      <Box sx={style}>
        <Grid container mb={4} spacing={22} direction='row' alignItems='center' justifyContent='center'>
          <Grid item>
          <Typography variant="h5">
          Connect Wallet
        </Typography>
          </Grid>
          <Grid item >
            <IconButton onClick={handleClose}>
            <CloseIcon/>
            </IconButton>
          
          </Grid>
        </Grid>
        <Divider style={{width: '100%',}} />
        
        
        <Typography mb={2} >Choose your preferred wallet</Typography>
        <Grid Container spacing={20} direction='column'>
          <Grid item>
        <Button mb={4} variant="outlined" style={{textDecoration: 'none',
                        color: '#000000',
                        borderColor: '1px solid #CFD8DC',
                        bordeRadius: '12px',
                        marginBottom: '20px',
                        alignItems: 'center',
                        textAlign: 'center'}}>
          <img width='30' height='30' style={{marginRight: '20px'}} src='https://ik.imagekit.io/ugyodiq15/metamask_0ATceyyo2.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674367657708' alt='MetaMask Icon' />
          Metamask <Box alignItems={'center'} ml={26}><ArrowForwardIosIcon /></Box> </Button>
          </Grid >
          < Grid item>
          <Button variant="outlined" style={{textDecoration: 'none',
                        color: '#000000',
                        borderColor: '1px solid #CFD8DC',
                        bordeRadius: '12px',
                        marginBottom: '10px',
                        alignItems: 'center',
                        textAlign: 'center'}} >
          <img width='30' height='30' style={{marginRight: '20px'}} src='https://ik.imagekit.io/ugyodiq15/Icon_HEVITp-J2d.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674368576854' alt='walletConnect' />
          WalletConnect
        <Box ml={20}><ArrowForwardIosIcon /></Box></Button>
          </Grid>
          </Grid>
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
          }}rawer
         
        >
          {drawer}
        </Drawer>
      </Box>
    </ThemeProvider>
  )
}

export default Navbar