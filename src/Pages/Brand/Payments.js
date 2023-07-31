import React from 'react'
import {Box,Grid,Typography,TextField,Button} from '@mui/material';


function Payments() {
  return (
    <Box>
      <Grid container direction='column' alignItems='center' justifyContent='center'>
        <Grid item >
          <img width='300' height='200' src='https://ik.imagekit.io/ugyodiq15/1200px-M-PESA_LOGO-01.svg_6tSoMvKdC.png?updatedAt=1690837192281' alt='m-pesa logo' />
        </Grid>
        <Grid item>
          <Typography variant='h3'>Pay your Influencer and watch your brand Grow</Typography>
        </Grid>
        <Grid item mt={10}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="Countries"
          label="Enter your Phone Number"
          name="Phone Number"
          autoComplete="Phone Number"
          autoFocus/>
        </Grid>
        <Grid item mt={10}>
        
          <Button variant="contained" sx={{dispay:'Block', width: '100%'}} >Pay Influencer</Button>
       
        </Grid>
      </Grid>
    </Box>
  )
}

export default Payments