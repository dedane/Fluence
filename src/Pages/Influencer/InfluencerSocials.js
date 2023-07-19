import { Typography,TextField, Button, Box, Container } from '@mui/material'
import React from 'react'

function InfluencerSocials() {
  return (
    <Box>
        <Container>
        <Typography color='#387507' variant='h2'>
            Almost Ready To Rock
        </Typography>
        <Box mb={10} mt={10} sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', width: 500,
        maxWidth: '100%',}} >
        <TextField
                margin="normal"
                required
                fullWidth
                id="Facebook"
                label="Facebook"
                name="facebook"
                autoComplete="facebook"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="twitter"
                label="twitter"
                name="twitter"
                autoComplete="twitter"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Instagram"
                label="Insragram"
                name="Instagram"
                autoComplete="Instagram"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="LinkedIn"
                label="LinkedIn"
                name="LinkedIn"
                autoComplete="LinkedIn"
                autoFocus
              />
               <Button  variant='contained' size='large' sx={{ width: 500, background:'#1270DE' }}>
            SaveSocials
        </Button>
        </Box>
        </Container>
    </Box>
  )
}

export default InfluencerSocials