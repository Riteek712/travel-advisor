import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material'

const Map = () => {
    const  isMobile = useMediaQuery('(min-width:600px)');
    const coordinates = {lat: 0, lng: 0};

  return (
    <div className='mapContainer'>
        <GoogleMapReact
            bootstrapURLKeys={{key:''}}
            defaultCenter={
                coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            option={''}
            // onChange={''}
            // onChildClick={''}
        >

        </GoogleMapReact>
        
    </div>
  )
}

export default Map