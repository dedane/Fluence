import React from 'react'
import { Grid,Box,Container,CssBaseline,Typography, Stack } from '@mui/material'
import { FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";

function Footer() {
  return (
   
    <footer  >
      
     <CssBaseline />
      <Box component="footer" 
      sx={{
          backgroundColor: ' #1D1D1E',
          color: 'white',
          py: 3,
          position: 'initial',
          px: 2,
          mt: 'auto'}}>
      <Container maxWidth="l" sx={{ py: 6 }}>
        <Grid container spacing={10} direction="row"
              justifyContent="center"
              alignItems="center">
          <Grid item xs={8} sm={3} >
            <Box mr={10}>
            <Box>
            <img sx={{ width: 200, height: 200 }}  src='https://ik.imagekit.io/ugyodiq15/Group_w2l_ITd4T.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668567639604' alt='logo' />
            </Box>
            <Box mt={10}>
            <Stack direction="row" spacing={5}>
              <FaFacebookF />
              <FaInstagram  />
              <FaTwitter />
            </Stack>
            </Box>
            </Box>
            <Box mt={5}>
              <Typography> <span>&#169;</span> 2022 Metabnb</Typography>
            </Box>
          </Grid>
          <Grid item xs={8} sm={3} f>
            <Box>
              <Typography variant="h5">Community</Typography>
            </Box>
            <Box mt={8}>
              <Typography sx={{fontWeight: '400', fontSize: '14px', lineHeight: '35x'}}>NFT</Typography>
              <Typography sx={{fontWeight: '400', fontSize: '14px', lineHeight: '35x'}}>Tokens</Typography>
              <Typography sx={{fontWeight: '400', fontSize: '14px', lineHeight: '35x'}}>Landlords</Typography>
              <Typography sx={{fontWeight: '400', fontSize: '14px', lineHeight: '35x'}}>Discord</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
          <Box>
              <Typography variant="h5">Places</Typography>
            </Box>
            <Box mt={8}>
              <Typography sx={{fontWeight: '400', fontSize: '14px', lineHeight: '35x'}}>Castle</Typography>
              <Typography sx={{fontWeight: '400', fontSize: '14px', lineHeight: '35x'}}>Farms</Typography>
              <Typography sx={{fontWeight: '400', fontSize: '14px', lineHeight: '35x'}}>Beach</Typography>
              <Typography sx={{fontWeight: '400', fontSize: '14px', lineHeight: '35x'}}>Learn More</Typography>
              
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
          <Box>
              <Typography variant="h5">About us</Typography>
            </Box>
            <Box mt={8}>
            <Typography sx={{fontWeight: '400', fontSize: '14px', lineHeight: '35x'}}>Road map</Typography>
              <Typography sx={{fontWeight: '400', fontSize: '14px', lineHeight: '35x'}}>Creators</Typography>
              <Typography sx={{fontWeight: '400', fontSize: '14px', lineHeight: '35x'}}>Career</Typography>
              <Typography sx={{fontWeight: '400', fontSize: '14px', lineHeight: '35x'}}>Contact Us</Typography>
            </Box>
          </Grid>

        </Grid>
        </Container>
        </Box>
    </footer>
   
  )
}

export default Footer