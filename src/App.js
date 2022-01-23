import "./App.css";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/map/Map";
// import PlaceDetails from "./Components/PlaceDetails/PlaceDetails";
import { CssBaseline, Grid } from "@material-ui/core";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
<List/>
        </Grid>
        <Grid item xs={12} md={8}>
         <Map/>     
            </Grid>
      </Grid>
    </>
  );
};

export default App;
