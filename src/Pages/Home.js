import { Typography,Container,TextField,Button,Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Home() {
  return (
    <div>
      <Stack direction='row'>
      <Container direction='row'>
        <Box mt={10}>
              <Typography sx={{ display: 'block', 
                fontSize: '45px', 
                fontStyle: 'normal',
                fontWeight: '400', 
                letterSpacing: '-.02em',
                width: 'fit-content'}} variant='h2'>Rent a <span style={{color: '#A02279'}} >place</span> away <br></br> from  <span style={{color: '#A02279'}}>Home</span> in the <span style={{color: '#A02279'}}>Metaverse</span></Typography>
        </Box>
        <Box mt={4}> 
                  <Typography variant='h6' display='block'>
                    we provide you access to luxury and affordable
                   houses in the <br></br> metaverse, get a chance to turn 
                   your <br></br>imagination to reality at your comfort zone
                  </Typography>
                  <Box mt={5} mb={5}>
                  <TextField sx={{width: '500'}}  label="search for location" />
                  <Button mt={10} sx={{ backgroundColor: '#A02279', width: '230px', height: '54px' }} variant="contained">Search</Button>
                  </Box>
        </Box>
      </Container>
      <Container>
        <img src='https://ik.imagekit.io/ugyodiq15/Group_4028_Tc_lJDmE2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668597433140' alt='hero-house-images' />
      </Container>
      </Stack>
    </div>
  )
}

export default Home