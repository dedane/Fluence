import { Box,
        Container,
        Typography,
        Grid,
        ListItemText, 
        MenuItem, 
        TextField,
        InputAdornment,
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

function InfluencerProfile() {
  return (
    <Box>
        <Container>
            <Typography variant='h3'>Update Your Profile To meet new brands</Typography>
            <Typography>Fill in the fields bellow</Typography>

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
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default InfluencerProfile