import { Box,
        Container,
        Typography,
        Grid,
        ListItemText, 
        MenuItem, 
        TextField,
        InputAdornment,
        Button,
        List,
        ListItemIcon,
        ListItemButton } from '@mui/material'
import { FiMail,FiCalendar, FiMapPin } from "react-icons/fi";
import React from 'react'

const gender = [
    {
        value: 'Male',
        label: 'Male'
    },
    {
        value: 'Female',
        label: 'Female'
    }
]

const category = [
    {
        value: 'Electronics',
        label: 'Electronics'
    },
    {
        value: 'Vehicles',
        label: 'vehicles'
    }
]

function InfluencerProfile() {
  return (
    <Box>
        <Container>
            <Box mt={4}>
                <Typography variant='h3'>Update Your Profile To meet new brands</Typography>
                <Typography>Fill in the fields bellow</Typography>
            </Box>
            <Box mt={10}>
                <Grid container direction='row'>
                    <Grid item>
                        <img src="https://ik.imagekit.io/ugyodiq15/Rectangle_48_Q76SuQ79k.png?updatedAt=1689821615944" alt='profile-image'/>
                    </Grid>
                    <Grid item>
                        <Box ml={8}>
                        <Typography variant='h5'>John Kamau</Typography>
                        </Box>
                        <List>
                            <ListItemButton>
                                <ListItemIcon>
                                 <FiMail />
                                </ListItemIcon>
                                <ListItemText>
                                    johnkamau@gmail.com
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    </Grid>
                </Grid>
                <Box mt={10}>
                    <Typography variant='h4'>
                        Profile details
                    </Typography>
                    <Box mt={10} mb={10}>
                        <Grid container spacing={8} alignContent='center' justifyContent='center'>
                            <Grid item sx={{direction:'column'}}>
                                <Box >
                            <TextField
                           
                                label="Date Of Birth"
                                id="Date of Birth"
                                InputProps={{
                                    startAdornment:
                                        <InputAdornment position="start">
                                            <FiCalendar />
                                        </InputAdornment>,
                                }}
                            />
                            </Box>
                            <Box mt={4}>
                            <TextField
                            
                                label="Location"
                                id="Location"
                                InputProps={{
                                    startAdornment:
                                        <InputAdornment position="start">
                                            <FiMapPin />
                                        </InputAdornment>,
                                }}
                            />
                            </Box>
                            </Grid>
                            
                            <Grid item>
                                <Box>
                            <TextField
                            sx={{width: 300}}
                                label="Sex"
                                select
                                defaultValue="male"
                                id="Sex of Influencer"
                                >
                                    {gender.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                                ))}
                            </TextField>
                            </Box>
                            <Box mt={4}>
                            <TextField
                            sx={{width: 300}}
                                label="Categories"
                                select
                                defaultValue="Electronics"
                                id="Category mastered by influencer"
                                >
                                    {category.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                                ))}
                            </TextField>
                            </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box mt={10} mb={10} justifyContent='center' alignItem='center'>
                    <Box mb={4}>
                        <Typography variant='h4'>
                            Contact Info
                        </Typography>
                    </Box>
                    <Grid container justifyContent='center' alignItem='center'>
                    <Box >
                    <TextField
                        label="Phone Number"
                        id="Mobile Contacts"
                        
                        InputProps={{
                            startAdornment: 
                            <InputAdornment position="start">
                                +254
                            </InputAdornment>,
                        }}
                    />
                
        </Box>
        </Grid>
        </Box>
            </Box >
            <Grid container justifyContent='center' alignItem='center'>
            <Box mb={4} justifyContent='center' alignItems='center'>
                
                <Button sx={{background: '#1270DE', width: 500}} variant='contained'>Continue</Button>
            </Box>
            </Grid>
        </Container>
        
    </Box>
  )
}

export default InfluencerProfile