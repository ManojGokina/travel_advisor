import React, { useState } from "react";
import {
//   CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
//   FromControl,
  Select,
  FormControl,
} from "@material-ui/core";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("Restaurants");
//   const [rating, setRating] = useState("");
  const places = [
    { name: "Cool Place" },
    { name: "Best Beer " },
    { name: "Best Beef" },
    { name: "Best Chill" },
    { name: "Cool Place" },
    { name: "Best Beer " },
    { name: "Best Beef" },
    { name: "Best Chill" },
    { name: "Cool Place" },
    { name: "Best Beer " },
    { name: "Best Beef" },
    { name: "Best Chill" },
  ];

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants , Hotels & Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="Restaurants">Restaurants</MenuItem>
          <MenuItem value="Hotels">Hotels</MenuItem>
          <MenuItem value="Attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
