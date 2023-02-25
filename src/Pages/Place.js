import React from 'react'

import { Box,Grid,Button,FormControl,InputAdornment,
    InputLabel,
   
    Icon,
    Select,  Typography, Card, Container, Rating, CardMedia, CardContent
   } from '@mui/material'
   


function Place() {
  return (
    <Box >
      <Box mt={20} sx={{ justifyContent: 'center'}} id='sponsors'  mb={15}> 
          <Grid container 
              direction='row'
              justifyContent="space-evenly"
              alignItems='center'
              >
            <Grid>
                <Button sx={{textDecoration:'none', color: '#434343'}}>Resturant</Button>
            </Grid>
            <Grid>
                <Button sx={{textDecoration:'none', color: '#434343'}}>Cottage</Button>
            </Grid>
            <Grid>
                <Button sx={{textDecoration:'none', color: '#434343'}}>Castle</Button>
            </Grid>
            <Grid>
                <Button sx={{textDecoration:'none', color: '#434343'}}>fantast city</Button>
            </Grid>
            <Grid>
                <Button sx={{textDecoration:'none', color: '#434343'}}>beach</Button>
            </Grid>
            <Grid>
                <Button sx={{textDecoration:'none', color: '#434343'}}>carbins</Button>
            </Grid>
            <Grid>
                <Button sx={{textDecoration:'none', color: '#434343'}}>off-grid</Button>
            </Grid>
            <Grid>
                <Button sx={{textDecoration:'none', color: '#434343'}}>farm</Button>
            </Grid>
            <Grid>
                <FormControl  sx={{ minWidth: 150 }}>
                  <InputLabel> Location</InputLabel>
                  <Select
    
    inputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Icon>TuneIcon</Icon>
        </InputAdornment>
      ),
    }}
  ></Select>

                  </FormControl>
            </Grid>

          </Grid>
      </Box>
      <Box mb={10}>
               <Container > 
               
                <Grid container
                
                spacing={8}
                direction="row"
                justifyContent="center" 
                alignItems="center"
                  >
                    
                    {metaHome.map((meta)  => (
                      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151__1__Sz06JdePTO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277556',
    name:'Desert King',
    title: 2,
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  { 
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151__2__FOX9ChLJm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277555',
    name:'Desert King',
    title: 3,
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151__3__RWHOeAhCC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625277552',
    name:'Desert King',
    title: 4,
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  { 
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151__4__ZzayBQGcR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625329018',
    name:'Desert King',
    title: 5,
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151__5__JuF3zRIWT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625329008',
    name:'Desert King',
    title: 6,
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  { 
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151__6__9rIS7oh5cf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625329015',
    name:'Desert King',
    title: 7,
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Frame_151__7__hR1hzXlEC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668625329269',
    name:'Desert King',
    title: 8,
    price: '1MBT per night',
    distance: '2345k away',
    availability: 'available for 2 weeks stay'
  },
]


export default Place