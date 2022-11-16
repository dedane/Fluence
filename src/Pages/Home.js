import { Typography,Container } from '@mui/material'
import React from 'react'

function Home() {
  return (
    <div>
      
      <Container direction='row'>
        <Typography sx={{ display: 'block', 
                fontSize: '45px', 
                fontStyle: 'normal',
                fontWeight: '400', 
                letterSpacing: '-.02em',
                width: 'fit-content'}} variant='h2'>Rent a <span style={{color: '#A02279'}} >place</span> away <br></br> from  <span style={{color: '#A02279'}}>Home</span> in the <span style={{color: '#A02279'}}>Metaverse</span></Typography>
      </Container>
    </div>
  )
}

export default Home