import React, { useEffect, useState } from "react";
import "./App.css";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./Api";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/map/Map";

// import PlaceDetails from "./Components/PlaceDetails/PlaceDetails";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked , setChildClicked] = useState(null);
  const [isLoading , setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);

    getPlacesData(bounds.sw, bounds.ne)
    .then((data) => {
      console.log(data);
      setPlaces(data);
      setIsLoading(false)
    });
  }, [coordinates, bounds]);

  return (  
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places}
          childClicked={childClicked} 
          isLoading={isLoading}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
