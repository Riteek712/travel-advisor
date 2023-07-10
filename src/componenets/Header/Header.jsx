import React from 'react'
// import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography } from '@mui/material'
// import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
// import InputBase from '@mui/material/InputBase';
// import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

// import useStyles from './styles'
const Header = () => {
  // const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar className='toolbar'>
        <Typography variant='h5' className='title'>
          Travel Advisor
        </Typography>
        <Box display='flex'>
        <Typography variant='h6' className='title'>
          Explore new places..
        </Typography>
        {/* <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton> */}
          <div className='search'>
            <div className='searchIcon'>
              <SearchIcon />
            </div>
            <TextField id="outlined-search" label="Search field" type="search" />
            {/* <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        /> */}
          </div>
        
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header