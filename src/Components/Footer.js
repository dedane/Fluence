import React from 'react'
import { Toolbar,Grid } from '@mui/material'

function Footer() {
  return (
    <div>
    <Toolbar background='#1D1D1E'>
        <Grid container spacing={4} columns={16}>
          <Grid item xs={4}>
            hello
          </Grid>
          <Grid item xs={12}>
           World 
          </Grid>

        </Grid>
    </Toolbar>
    </div>
  )
}

export default Footer