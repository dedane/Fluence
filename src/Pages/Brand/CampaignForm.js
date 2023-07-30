import React from 'react'
import {Container,Box,Grid,TextField,Typography, InputAdornment,Button} from '@mui/material'
import {FiTwitter,FiLinkedin,FiInstagram,FiFacebook} from 'react-icons/fi'

function CampaignForm() {
  return (
    <Box mt={10} mb={10}>
      <Container maxWidth="md">
      <Grid container direction='row' spacing={4} alignItems='center' justifyContent='center'>
        <Grid item>
        <TextField
        sx={{width:400}}
          id="outlined-multiline-static"
          label="Brand Product/Overview"
          multiline
          rows={6}
          defaultValue="Overview of the brand"
        />
        </Grid>
        <Grid item>
        <TextField
          sx={{width:400}}
          id="outlined-multiline-static"
          label="Campaign Objective"
          multiline
          rows={6}
          defaultValue="What do you want to achieve"
        />
        </Grid>
      </Grid>
      <Box mt={10}>
      <TextField
          required
          id="outlined-required"
          fullWidth
          label="Call To action"
          
        />
      </Box>
      <Box mt={10}>
        <Typography variant='h3'> Input your social Media Handles</Typography>
      </Box>
      <Grid  container direction='column' mt={4}  spacing={4}>
        <Grid item>
        <TextField
        id="input-with-icon-textfield"
        label="TextField"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FiTwitter />
            </InputAdornment>
          ),
        }}
        
      />
        </Grid>
        <Grid item>
        <TextField
        id="input-with-icon-textfield"
        label="LinkedIn"
        fullWidth
        defaultValue='LinkedIn Link'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FiLinkedin />
            </InputAdornment>
          ),
        }}
        
      />
        </Grid>
        <Grid item>
        <TextField
        id="input-with-icon-textfield"
        label="Instagram"
        fullWidth
        defaultValue='Instagram Link'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FiInstagram />
            </InputAdornment>
          ),
        }}
        
      />
        </Grid>
        <Grid item>
        <TextField
        id="input-with-icon-textfield"
        label="Facebook"
        fullWidth
        defaultValue='Facebook link'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FiFacebook />
            </InputAdornment>
          ),
        }}
        
      />    
        </Grid>

      </Grid>
      <Box mt={4} mb={4} display="flex" justifyContent='center' alignItem='center'>
          <Button variant="contained" sx={{dispay:'Block', width: '100%'}} >Submit</Button>
      </Box>
      </Container>
    </Box>
  )
}

export default CampaignForm