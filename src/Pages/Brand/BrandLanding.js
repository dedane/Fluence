import React from 'react'
import {Box,
        Container,
        Typography,
        TextField,
        Grid, 
        InputAdornment, 
        FormControl, 
        Button,
        FormLabel, 
        FormGroup, 
        FormControlLabel, 
        Checkbox} from '@mui/material';



function BrandLanding() {
  return (
    <Box >
      <Container maxWidth="md">
        <Box>
          <Typography variant='h1'>Start Your Campaign</Typography>
        </Box>
        <Box mt={4} mb={4}>
          <TextField
          margin="normal"
          required
          fullWidth
          id="BrandName"
          label="BrandName"
          name="BrandName"
          autoComplete="BrandName"
          autoFocus/>
          <TextField
          margin="normal"
          required
          fullWidth
          id="Countries"
          label="Countries"
          name="Countries"
          autoComplete="Countries"
          autoFocus/>
        </Box>
        <Box mt={4} mb={4}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item>
        <Typography>Start Period</Typography>
        <TextField
      label="Date"
      type="datetime-local"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <div style={{ borderLeft: '1px solid #ccc', height: '100%', margin: '0 5px' }} />
            <TextField
              label="Time"
              type="time"
              defaultValue="12:00"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 minutes step
              }}
            />
          </InputAdornment>
        ),
      }}
      InputLabelProps={{
        shrink: true,
      }}
    />
    </Grid>
    <Grid item>
    <Typography>End Period</Typography>
    <TextField
      label="Date"
      type="datetime-local"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <div style={{ borderLeft: '1px solid #ccc', height: '100%', margin: '0 5px' }} />
            <TextField
              label="Time"
              type="time"
              defaultValue="12:00"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 minutes step
              }}
            />
          </InputAdornment>
        ),
      }}
      InputLabelProps={{
        shrink: true,
      }}
    />
    </Grid>
    </Grid>
    </Box>
    <Box mt={4} mb={4} display="flex" justifyContent='center' alignItem='center' gap={10}>
    <FormControl sx={{spacing:10}} component="fieldset">
      <FormLabel component="legend">Label placement</FormLabel>
      <FormGroup aria-label="position" row style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <FormControlLabel
          value="Facebook"
          control={<Checkbox />}
          label="Facebook"
          labelPlacement="end"
        />
        <FormControlLabel
          value="Twitter"
          control={<Checkbox />}
          label="Twitter"
          labelPlacement="end"
        />
        <FormControlLabel
          value="Instagram"
          control={<Checkbox />}
          label="Instagram"
          labelPlacement="end"
        />
        <FormControlLabel
          value="LinkedIn"
          control={<Checkbox />}
          label="LinkedIn"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
    </Box>
    <Box>
    <TextField
          margin="normal"
          required
          fullWidth
          id="Budget"
          label="Budget"
          name="Budget"
          autoComplete="Budget"
          autoFocus/>
    </Box>
    <Box mt={4} mb={4} display="flex" justifyContent='center' alignItem='center'>
    <Button variant="contained" sx={{dispay:'Block', width: '100%'}} >Submit</Button>
    </Box>
      </Container>
    </Box>
  )
}

export default BrandLanding