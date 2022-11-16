import React from 'react'
import { Grid,Box,Container,CssBaseline,AppBar, Typography, Stack } from '@mui/material'
import { FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <AppBar sx={{ background: ' #1D1D1E', position: 'relative'}}>
      <CssBaseline />
    <footer component="footer" >
      
     
      <Box component="footer" 
      sx={{
          py: 3,
          px: 2,
          mt: 'auto'}}>
      <Container >
        <Grid container spacing={5} columns={16}>
          <Grid item xs={12} sm={3}>
            <Box>
            <img src='https://ik.imagekit.io/ugyodiq15/Group_w2l_ITd4T.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668567639604' alt='logo' />
            </Box>
            <Box mt={15}>
            <Stack direction="row" spacing={8}>
              <FaFacebookF fontSize="30"/>
              <FaInstagram fontSize="40" />
              <FaTwitter fontSize="40"/>
            </Stack>
            </Box>
            <Box mt={10}>
              <Typography> <span>&#169;</span> 2022 Metabnb</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box>
              <img src='' />
            </Box>
            <Box>
              
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
          <Box>
              <img src='' />
            </Box>
            <Box>
              
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
          <Box>
              <img src='' />
            </Box>
            <Box>
              
            </Box>
          </Grid>

        </Grid>
        </Container>
        </Box>
    </footer>
    </AppBar>
  )
}

export default Footer