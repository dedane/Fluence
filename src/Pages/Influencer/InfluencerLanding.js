import { Container,Box,Grid,Typography,Card, CardMedia } from '@mui/material'
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
        <Card sx={{display: 'flex'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia
            sx={{ width: 351}}
            src='https://ik.imagekit.io/ugyodiq15/Rectangle_64_cw-ncTJhp.png?updatedAt=1689798370738' 
            alt='brandImage'/>    
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent>
                
            </CardContent>
          </Box>

        </Card>
      </Box>
      </Container>
    </Box>
  )
}

export default InfluencerLanding