import { Container,Box,Grid,Typography,Card, CardMedia, CardContent, IconButton } from '@mui/material'
import { FiTwitter,FiLinkedin,FiInstagram,FiFacebook } from "react-icons/fi";
import React from 'react'

function InfluencerLanding() {
  return (
    <Box>
      <Container>
      <Box>
        <Grid container direction="row" height='100vh' spacing={8} justifyContent="center" alignItems="center">
          <Grid item>
            <Card sx={{backgroundColor: '#1270DE', width: 500, height: 300}}>
            <Box mt={10}>
              <Grid container direction="row" spacing={8} justifyContent="center" alignItems="center">
                
                <Grid item>
                  <Typography variant="h6" color='#ffffff'>
                    Expected  
                     {'\n'}
                     Payments
                  </Typography>
                  <Typography variant="h4" color='#ffffff'>
                    60,000  
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" color='#ffffff'>
                    Task 
                      {'\n'}
                     Completed
                  </Typography>
                  <Typography variant="h4" color='#ffffff'>
                    4
                  </Typography>
                </Grid>
                
              </Grid>
              </Box>
            </Card>
          </Grid>
          <Grid item>
          <Card sx={{backgroundColor: '#387507', width: 500, height: 300}}>
            <Box mt={10}>
              <Grid container direction="row" spacing={8} justifyContent="center" alignItems="center">
                
                <Grid item>
                  <Typography variant="h6" color='#ffffff'>
                    Expected  
                     {'\n'}
                     Payments
                  </Typography>
                  <Typography variant="h4" color='#ffffff'>
                    60,000  
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" color='#ffffff'>
                    Task 
                      {'\n'}
                     Completed
                  </Typography>
                  <Typography variant="h4" color='#ffffff'>
                    4
                  </Typography>
                </Grid>
                
              </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography variant='h1' color='#387507'>
          Job Bids
        </Typography>
        <Card sx={{display: 'flex', height: 500, width: 1200, backgroundColor: '#D9D9D9'}}>
          <Box sx={{ display: 'flex',mr: 20, ml: 10, flexDirection: 'column', alignItems:'center', justifyContent:'center'}}>
            <CardMedia
            component="img"
            sx={{ width: 351,}}
            src='https://ik.imagekit.io/ugyodiq15/Rectangle_64_cw-ncTJhp.png?updatedAt=1689798370738' 
            alt='brandImage'/>    
          </Box>
          <Box  sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center'}} >
          <Grid container direction="row" height='100vh' spacing={8} justifyContent="center" alignItems="center" >
            <Grid item>
              <CardContent>
                  <Typography variant="h6">
                    Brand Name
                  </Typography>
                  <Typography>
                    Nivea Kenya
                  </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h6">
                  CampaignName
                </Typography>
                <Typography>
                  MoisturizeMtaani
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h6">
                  Campaign Objective
                </Typography>
                <Typography>
                  10,000 Followers
                </Typography>
              </CardContent>
            </Grid>
            <Grid item>
            
                  <Typography variant="h6">
                    Social Media Handles
                  </Typography>
             <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <IconButton>
                    <FiTwitter />
                  </IconButton>
                  <IconButton>
                    <FiFacebook />
                  </IconButton>
                  <IconButton>
                    <FiInstagram />
                  </IconButton>
                  <IconButton>
                    <FiLinkedin />
                  </IconButton>
              </Box>
              <CardContent>
                <Typography variant="h6">
                  CampaignName
                </Typography>
                <Typography>
                  MoisturizeMtaani
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h6">
                  Campaign Objective
                </Typography>
                <Typography>
                  10,000 Followers
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
          </Box>
        </Card>
      </Box>
      </Container>
    </Box>
  )
}

export default InfluencerLanding