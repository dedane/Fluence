import { Box,Container,Typography,Grid, ListItemText, List, ListItemIcon, ListItemButton } from '@mui/material'
import { FiMail } from "react-icons/fi";
import React from 'react'

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
            </Box>
        </Container>
    </Box>
  )
}

export default InfluencerProfile