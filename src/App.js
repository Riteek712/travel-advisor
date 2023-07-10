import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from "react";
import Header from "./componenets/Header/Header";
import Map from "./componenets/Map/Map";
import List from "./componenets/List/List";
import PlaceDetails from "./componenets/PlaceDetails/PlaceDetails";
function App() {
  return (
    <>
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={2} style={{width: '100%'}} >
        <Grid item xs={4}>
          <List />
        </Grid>
        {/* the map grid takes more space in the screen so the md is set to 8 and list is set to 4. */}
        <Grid item xs={8}> 
          <Map />
        </Grid>
      </Grid>
        
    </div>
    </>
  );
}

export default App;