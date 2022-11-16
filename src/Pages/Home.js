
import { 
      Typography, 
      TextField,
      Button,
      Stack,
      Grid,
      Card,
      Container,
      CardMedia,
      CardContent,
      Rating } from '@mui/material'
      import { styled } from '@mui/material/styles';
import { Box } from '@mui/system'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

function Home() {
  return (
    <Box>
      <Box>
      <Stack  width='100vw' direction='row'>
        
      <Box direction='row' mx='auto'>
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
      </Box>
      
      <Box direction='row' mx='auto' mt={5}>
        <img src='https://ik.imagekit.io/ugyodiq15/Group_4028_Tc_lJDmE2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668597433140' alt='hero-house-images' />
      </Box>
      </Stack>
      </Box>
       <Box mt={20} sx={{ justifyContent: 'center'}} id='sponsors'  mb={15}> 
          <Grid container 
                spacing={15} 
                direction="row"
                sx={{backgroundColor:'#A02279',
                justifyContent:"space-evenly",
              alignItems:"center",
              height: '70px'
                }}
                >   
         <Grid >
            <Box  >
              <img src='https://ik.imagekit.io/ugyodiq15/mbtToken_AkI7nkRdf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668619101977' alt='MBT token'/>
            </Box>
          </Grid>
          <Grid >
                  <Box >
                    <img src='https://ik.imagekit.io/ugyodiq15/metamask_yLTSCpwZE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668619101953' alt='Metamask'/>
                  </Box>  
                </Grid>
          <Grid >
            <Box>
              <img src='https://ik.imagekit.io/ugyodiq15/opensea_FX6HDDCZ6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668619101949' alt='open sea'/>
            </Box>
          </Grid>
          </Grid>
        </Box>
        <Box mb={5}>
        
            
              <Typography variant='h3' align='center' >
                  Inspiration for your next adventure
                </Typography>
            <Container>
              
                <Grid container spacing={1} maxWidth={12}>
                { metaHome.map((meta) => (
                    <Grid item xs={6} >
                      <Card key={meta.img}>
                        <CardMedia>
                          <img src={`${meta.img}`} alt={`${meta.title}`} />
                        </CardMedia>
                        <CardContent>
                          <Grid>
                            <Grid item>{`$  `}</Grid>
                            <Grid item></Grid>
                          </Grid>
                          <Grid>
                            <Grid item></Grid>
                            <Grid item></Grid>
                          </Grid>

                        </CardContent>
                        <StyledRating
        name="customized-color"
        defaultValue={5}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<StarIcon fontSize="inherit" />}
        
      />
                      </Card>
                    </Grid> ))}
                </Grid> 
            </Container>
          
        </Box>
      
    </Box>
  )
}

const metaHome = [
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151_GcpJiNw23.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277583',
    title: 'house1',
    name:'Desert King',
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151_GcpJiNw23.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277583',
    name:'Desert King',
    title: 'house1',
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  { 
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151_GcpJiNw23.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277583',
    name:'Desert King',
    title: 'house1',
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151_GcpJiNw23.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277583',
    name:'Desert King',
    title: 'house1',
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  { 
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151_GcpJiNw23.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277583',
    name:'Desert King',
    title: 'house1',
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151_GcpJiNw23.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277583',
    name:'Desert King',
    title: 'house1',
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  { 
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151_GcpJiNw23.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277583',
    name:'Desert King',
    title: 'house1',
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151_GcpJiNw23.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277583',
    name:'Desert King',
    title: 'house1',
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
]

export default Home