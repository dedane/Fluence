import React from 'react'
import { Box,Grid,Button,FormControl,
    InputLabel,
    OutlinedInput,
    Select,  Typography, Card, Container, Rating, CardMedia, CardContent
   } from '@mui/material'
    import TuneIcon from '@mui/icons-material/Tune';


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
                <FormControl  sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel > Location</InputLabel>
                  <Select id="demo-simple-select-helper-label" input={<OutlinedInput name='Location' id='my-location' />}
                  IconComponent={() => <TuneIcon />}></Select>
                  </FormControl>
            </Grid>

          </Grid>
      </Box>
      <Box mb={10} justifyContent="spaceEvenly">
               <Container > 
               
                <Grid container
                height='100vh'
                direction="row"
                justifyContent="center" 
                alignItems="center"
                  >
                    
                    {metaHome.map((meta)  => (
                      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                      <Card variant="outlined" sx={{bordeRadius: '15px',
                                                    width: '250px',
                                                    height: '320px',
                                                    borderRadius: '15px'}} >
                        <CardMedia 
                        sx={{marginLeft: '16px', marginTop: '12px'}}
                             ml={10} mt={10} >
                             
                          <img  width= '220px'
                              height= '180px' src={meta.img} alt='1' />
                        </CardMedia>
                        <CardContent>
                         <Grid container direction='row'  justifyContent="center" >
                          <Grid item direction='row' >
                            <Box ><Typography sx={{fontSize: '12px'}} >{meta.name}</Typography></Box>
                            <Box ><Typography sx={{fontSize: '12px'}} >{meta.distance}</Typography></Box>
                          </Grid>
                          <Grid  item direction='row' >
                            <Box  mt={1} ><Typography sx={{fontSize: '12px'}} >{meta.price}</Typography></Box>
                            <Box ><Typography sx={{fontSize: '12px', fontWeight: '200'}} >{meta.availability}</Typography></Box>
                          </Grid>
                          </Grid> 
                          <Box ml={1.5} mt={1} sx={{justifyContent: 'space-between'}}>
                            <Rating size='small' mx='auto' name="meta-ratings" defaultValue={5}/>
                          </Box>
                          
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

export default Place