

import { 
      Typography, 
      TextField,
      Button,
      Grid,
      Card,
      Container,
      CardMedia,
      
      CardContent,
      Rating } from '@mui/material'
    
      //import { styled } from '@mui/material/styles';
import { Box } from '@mui/system'
import React from 'react'
/* import StarIcon from '@mui/icons-material/Star';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)',
  },
  '& .MuiRating-iconHover': {
    color: 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)',
  },
}); */

function Home() {
  return (
    <Box height='100%'>
      <Container Container spacing={3}>
        <Grid container direction="row" height='100vh' justifyContent="center" alignItems="center">
      <Grid item xs={6} direction='row' >
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
                   houses in the  metaverse, get a chance to turn 
                   your imagination to reality at your comfort zone
                  </Typography>
                  <Box mt={5} mb={5}>
                  <TextField sx={{width: '500'}}  label="search for location" />
                  <Button mt={10} sx={{ backgroundColor: '#A02279', width: '230px', height: '54px' }} variant="contained">Search</Button>
                  </Box>
        </Box>
      </Grid>
      
      <Grid item xs={6} direction='row'  >
        <img 
              src='https://ik.imagekit.io/ugyodiq15/Group_4028_Tc_lJDmE2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668597433140' 
              style={{
              width:'20',
              height:'30' }}
              alt='hero-house-images' />
      </Grid>
      </Grid>
      </Container>
       <Box mt={20} sx={{ justifyContent: 'center', alignItems: 'center'}} id='sponsors'  mb={5}> 
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
        <Box >
        
            <Box justifyContent="center" alignItems="center">
              <Typography variant='h3' mb={5} align='center' >
                  Inspiration for your next adventure
                </Typography>
            </Box>  
            <Box height='100%' mb={10}>
               <Container > 
               
                <Grid container
                
                spacing={8}
                direction="row"
                justifyContent="center" 
                alignItems="center"
                  >
                    
                    {metaHome.map((meta)  => (
                      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                      <Card variant="outlined" sx={{bordeRadius: '15px',
                                                    width: '292px',
                                                    height: '372px',
                                                    borderRadius: '15px'}} >
                        <CardMedia 
                        sx={{marginLeft: '16px', marginTop: '12px'}}
                             ml={10} mt={10} >
                             
                          <img  width= '260px'
                              height= '265px' src={meta.img} alt='1' />
                        </CardMedia>
                        <CardContent>
                        <Grid container   spacing={2} >
                          <Grid item  xs={4}>
                            
                            <Box mb={1}><Typography sx={{fontSize: '12px'}} >{meta.name}</Typography></Box>
                            <Box ><Typography sx={{fontSize: '12px'}} >{meta.distance}</Typography></Box>
                            <Box  mt={1} sx={{justifyContent: 'space-between'}}>
                            <Rating size='small' mx='auto' name="meta-ratings" defaultValue={5}/>
                          </Box>
                          </Grid>
                          <Grid  item  xs={8}>
                            
                            <Box mb={1}><Typography sx={{fontSize: '12px'}}  fontWeight='bold'>{meta.price}</Typography></Box>
                            <Box ><Typography sx={{fontSize: '12px'}} >{meta.availability}</Typography></Box>
                            
                          </Grid>
                          </Grid> 
                          
                          
                        </CardContent>
                        {/* <StyledRating
                          name="customized-color"
                          defaultValue={5}
                          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                          precision={0.5}
                          icon={<StarIcon fontSize="inherit" />} */}
                         
        
      
                      </Card> 
                      </Grid>
                      ))}
                    
                    
                </Grid> 
                
                </Container>  
                </Box>  

                
                  <Box  
                      sx={{backgroundColor:'#A02279',
                      justifyContent:"space-evenly",
                      }}>
                 <Container>                             
                <Grid 
                container
                height='100vh'
                direction="row"
                justifyContent="center" 
                alignItems="center">
                    <Grid item xs={6}>
                        <Typography sx={{color: '#ffffff'}} mt={10} variant='h2'>
                            Metabnb NFTs
                        </Typography>
                        <Typography sx={{color: '#ffffff'}} display='block' mt={5} mb={5}>
                                Discover our NFT gift cards collection. 
                                Loyal <br></br>customers gets amazing gift cards which are <br></br>traded as NFTs.
                                These NFTs gives our cutomer <br></br>access to loads of our exclusive services.
                        </Typography>
                        <Button variant="contained"  sx={{ backgroundColor: '#FFFFFF', width: '230px', height: '54px', color: '#A02279' }}>Learn More</Button>
                    </Grid>
                    
                    <Grid item xs={6}>
                          <img width= '600px'
                          justifyContent='center'
                              height= '500px' src="https://ik.imagekit.io/ugyodiq15/housing_r7HKiS5lh.png" alt='crib-art' />
                   </Grid>
                    </Grid>
                    </Container>
                  </Box>
                
        </Box>
      
    </Box>
  )
}

const metaHome = [
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151_GcpJiNw23.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277583',
    title: 1,
    name:'Desert King',
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151_GcpJiNw23.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277583',
    name:'Desert King',
    title: 2,
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  { 
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151_GcpJiNw23.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277583',
    name:'Desert King',
    title: 3,
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151_GcpJiNw23.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277583',
    name:'Desert King',
    title: 4,
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  { 
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151_GcpJiNw23.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277583',
    name:'Desert King',
    title: 5,
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151_GcpJiNw23.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277583',
    name:'Desert King',
    title: 6,
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  { 
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151_GcpJiNw23.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277583',
    name:'Desert King',
    title: 7,
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151_GcpJiNw23.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277583',
    name:'Desert King',
    title: 8,
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
]

export default Home