

import { 
      Typography, 
      TextField,
      Button,
      Avatar,
      Grid,
      Card,
      Container,
      CardMedia,
      CardContent,
      Rating } from '@mui/material'
      import Slider from "react-slick";
import { Box } from '@mui/system'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ArrowForward } from '@mui/icons-material';
import { FiUserPlus,FiUsers,FiUserCheck,FiZoomIn } from 'react-icons/fi'
import React from 'react'

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <Box height='100%'    >
      <Container Container spacing={3} sx={{display: { xs: 'none', sm: 'none', md: 'block' }}}>
        <Grid container direction="row" height='100vh' justifyContent="center" alignItems="center">
      <Grid item xs={6} direction='row' >
        <Box mt={10}>
        <Typography variant="h2" className="find-hire-the">
              <span className="text-wrapper">
                Find &amp; Hire the Perfect
                <br />
              </span>
              <span style={{color: '#59b70f'}}>influencer</span>
              <span className="text-wrapper">
                {" "}
                for <br />
                your{" "}
              </span>
              <span style={{color: '#116fde'}}>Brand</span>
            </Typography>
        </Box>
        <Box mt={4}> 
                  <Typography variant='h6' display='block'>
                  Leverage power of creators to make your brand stand out
                 </Typography>
                  <Box mt={10}>
                  <Grid container direction='row'>
                    <Grid item>
                  <Box  >
                  <Button mt={10} variant="contained">Join As A brand</Button>
                  </Box>
                  </Grid>
                  <Grid item>
                  <Box ml={10}>
                  <Button mt={10}  sx={{borderColor: '#59b70f', color: '#377407'}} variant="outlined">Join As A Creator</Button>
                  </Box>
                  </Grid>
                  </Grid>
                  </Box>
        </Box>
      </Grid>
      
      <Grid item xs={6} direction='row' style={{marginTop: '30'}} >
        <img 
              src='https://ik.imagekit.io/ugyodiq15/Group_14_PwBfPnAa_.png?updatedAt=1689320570244' 
              style={{
              width:'20',
              height:'30' }}
              alt='Influencers' />
      </Grid>
     
      </Grid>
      
       {/*  <Grid Container direction="column"  justifyContent="center" alignItems="center">
      <Grid item xs={12} >
        <Box mt={10}>
        <Typography className="find-hire-the">
              <span className="text-wrapper">
                Find &amp; Hire the Perfect
                <br />
              </span>
              <span sx={{color: '#59b70f'}}>influencer</span>
              <span className="text-wrapper">
                {" "}
                for <br />
                your{" "}
              </span>
              <span sx={{color: '#116fde'}}>Brand</span>
            </Typography>
        </Box>
        <Box mt={4} mb={4}> 
                  <Typography variant='h6' display='block'>
                  Leverage power of creators to make your brand stand out
                  </Typography>
                  
                  <Box mt={4}>
                  <Grid container>
                    <Grid item xs={6}>
                    <Button sx={{ backgroundColor: '#A02279', width: '170px', height: '54px', align: 'center' }} variant="contained">Join As Brand</Button>
                    </Grid>
                    <Grid item xs={6}>
                    <Button sx={{ backgroundColor: '#A02279', width: '170px', height: '54px', align: 'center' }} variant="contained">Join As Creator</Button> 
                    </Grid>
                  </Grid>
                  </Box>
                  
        </Box>
      </Grid>
      <Box >
      <Grid item xs={12} >
        <img 
              src='https://ik.imagekit.io/ugyodiq15/Group_4028_Tc_lJDmE2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668597433140' 
              width='320'
              height='320'
              alt='hero-house-images' />
      </Grid>
      </Box>
      </Grid> */}
      </Container>
       {/* <Box mt={20} sx={{ justifyContent: 'center', alignItems: 'center', display: { xs: 'none', sm: 'none', md: 'block'}}}  id='sponsors'  mb={5} > 
          <Grid 
                container 
                spacing={2} 
                direction="row"
                sx={{backgroundColor:'#A02279',
                justifyContent:"space-around",
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
        </Box> */}
        <Box mt={20} sx={{ justifyContent: 'center', alignItems: 'center', display: { xs: 'block', sm: 'none', md: 'none'}}}  id='sponsors'  mb={5} > 
          <Grid 
                container 
                spacing={2} 
                direction="column"
                sx={{backgroundColor:'#A02279',
                justifyContent:"space-around",
              alignItems:"center",
              height: '180px'
                }}
                >   
                
         
            <Box  >
              <img src='https://ik.imagekit.io/ugyodiq15/mbtToken_AkI7nkRdf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668619101977' alt='MBT token'/>
            </Box>
         
                  <Box >
                    <img src='https://ik.imagekit.io/ugyodiq15/metamask_yLTSCpwZE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668619101953' alt='Metamask'/>
                  </Box>  
            
            <Box>
              <img src='https://ik.imagekit.io/ugyodiq15/opensea_FX6HDDCZ6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668619101949' alt='open sea'/>
            </Box>
        
          
          </Grid>
        </Box>
        {/* <Box mt={20} sx={{justifyContent: 'center', alignItems: 'center'}} id='sponsors'>
        <div 
            container 
            spacing={15} 
            direction="row"
            sx={{ backgroundColor:'#A02279',
                  justifyContent:"space-around",
                  alignItems:"center",
                  height: '70px'
                }}
        > 
                <Slider {...settings}>
                  <div>
                  <img src='https://ik.imagekit.io/ugyodiq15/mbtToken_AkI7nkRdf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668619101977' alt='MBT token'/>
                  </div>
                  <div>
                  <img src='https://ik.imagekit.io/ugyodiq15/mbtToken_AkI7nkRdf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668619101977' alt='MBT token'/>
                  </div>
                  <div>
                  <img src='https://ik.imagekit.io/ugyodiq15/mbtToken_AkI7nkRdf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668619101977' alt='MBT token'/>
                  </div>
                </Slider>
                </div>
        </Box> */}
        <Box mt={16} >
        
            <Box justifyContent="center" alignItems="center">
              <Typography variant='h3' mb={5} align='center' >
                  Find Your Perfect Influencer
                </Typography>
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
                      <Grid item xs={12} sm={12} md={8} lg={4} xl={4}>
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
                        <Box container   spacing={2} >
                         
                            
                            <Box mb={1}>
                              <Typography variant='h5'  >{meta.name}</Typography>
                              </Box>
                            
      
                            <Grid container direction="row" alignItems="center" spacing={4}>
                              <Grid item>
                                <FacebookIcon />
                              </Grid>
                              <Grid item>
                                <TwitterIcon />
                              </Grid>
                              <Grid item>
                                <InstagramIcon />
                              </Grid>
                              
                            </Grid>
                            
                          
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
                
                <Box mt={16} >
        
            <Box justifyContent="center" alignItems="center">
              <Typography variant='h3' mb={5} align='center' >
                  How We Work
                </Typography>
                <Box mt={14}>
                <Grid container spacing={4}
                direction="row"
                justifyContent="center" 
                alignItems="center">
                  <grid item xs={12}  sm={12} md={8} lg={4} xl={4}>
                    <Card>
                      <CardContent>
                      <Box align='center' justify='center'>
                        <Box>
                            <Avatar sx={{ width: 56, height: 56, bgcolor: '#59b70f',  }}>
                              <FiUserPlus />
                            </Avatar>
                        </Box>  
                        <Box mt={5}>
                              <Typography variant='h5'>
                                Create Account
                              </Typography>
                              </Box>
                              <Box mt={4}>
                                <Typography>
                                  Register with your<br/>
                                  details to initialize
                                  process
                                </Typography>
                              </Box>
                            </Box>
                      </CardContent>
                    </Card>
                  </grid>
                  <grid item xs={12} sm={12} md={8} lg={4} xl={4}>
                    <Card>
                      <CardContent>
                      <Box align='center' justify='center'>
                        <Box>
                            <Avatar sx={{ width: 56, height: 56, bgcolor: '#1270DE',  }}>
                              <FiUserCheck />
                            </Avatar>
                        </Box>  
                        <Box mt={5}>
                              <Typography variant='h5'>
                                Complete Profile
                              </Typography>
                              </Box>
                              <Box mt={4}>
                                <Typography>
                                  Fill in your<br/>
                                  profile data
                                </Typography>
                              </Box>
                            </Box>
                      </CardContent>
                    </Card>
                  </grid>
                  <grid item xs={12} sm={12} md={8} lg={4} xl={4}>
                    <Card>
                      <CardContent>
                      <Box align='center' justify='center'>
                        <Box>
                            <Avatar sx={{ width: 56, height: 56, bgcolor: '#900CBE',  }}>
                              <FiZoomIn />
                            </Avatar>
                        </Box>  
                        <Box mt={5}>
                              <Typography variant='h5'>
                                Find Each Other
                              </Typography>
                              </Box>
                              <Box mt={4}>
                                <Typography>
                                  Find the best influencer<br/>
                                  for your brand
                                </Typography>
                              </Box>
                            </Box>
                      </CardContent>
                    </Card>
                  </grid>
                  <grid item xs={12} sm={12} md={8} lg={4} xl={4}>
                    <Card>
                      <CardContent>
                      <Box align='center' justify='center'>
                        <Box>
                            <Avatar sx={{ width: 56, height: 56, bgcolor: '#C90F0F',  }}>
                              <FiUsers />
                            </Avatar>
                        </Box>  
                        <Box mt={5}>
                              <Typography variant='h5'>
                                Collaborate
                              </Typography>
                              </Box>
                              <Box mt={4}>
                                <Typography>
                                  Strike a deal<br/> and Work
                                  together
                                </Typography>
                              </Box>
                            </Box>
                      </CardContent>
                    </Card>
                  </grid>
                  
                </Grid>
                </Box>
            </Box> 
            </Box>
                
                  {/* <Box  
                      sx={{backgroundColor:'#A02279',
                      justifyContent:"space-evenly",
                      }}>
                 <Container sx={{display: { xs: 'none', sm: 'none', md: 'block' }}}>                             
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
                    <Container sx={{display: { xs: 'block', sm: 'block', md: 'none' }}}>                             
                <Grid 
                container
                direction="Container"
                justifyContent="center" 
                alignItems="center">
                   <Grid item mt={4} mb={2} mr={5}>
                          <img width= '300px'
                          justifyContent='center'
                              height= '300px' src="https://ik.imagekit.io/ugyodiq15/housing_r7HKiS5lh.png" alt='crib-art' />
                   </Grid>
                    <Grid item mb={5}>
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
                    
                   
                    </Grid>
                    </Container>
                  </Box> */}
                
        </Box>
      
    </Box>
  )
}

const metaHome = [
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Rectangle_15_BA_mQAAwA.png?updatedAt=1689419138336',
    title: 1,
    name:'Elaine Makena',
   
  },
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Rectangle_11_DTRjInimA.png?updatedAt=1689419138343',
    name:'Flora Maina',
    title: 2,
  },
  { 
    img: 'https://ik.imagekit.io/ugyodiq15/Rectangle_6_tJgsv99XL.png?updatedAt=1689320410163',
    name:'Pablo Escobar',
    title: 3,
    
  },
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Rectangle_14_bwajH5aXSR.png?updatedAt=1689419138315',
    name:'Susan Mwikali',
    title: 4,
    
  },
  { 
    img: 'https://ik.imagekit.io/ugyodiq15/Rectangle_4_QPM7ITcAZx.png?updatedAt=1689320410336',
    name:'Sharon Ndulu',
    title: 5,
    
  },
  {
    img: 'https://ik.imagekit.io/ugyodiq15/Rectangle_13_jyKxqJsdr.png?updatedAt=1689419138302',
    name:'Loise Keen',
    title: 6,
   
  },
  
]

export default Home