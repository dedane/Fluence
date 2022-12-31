import React from 'react'
import { Box,Grid,Button,FormControl,
    InputLabel,
    OutlinedInput,
    Select } from '@mui/material'
    import TuneIcon from '@mui/icons-material/Tune';


function Place() {
  return (
    <Box>
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
    </Box>
  )
}

export default Place