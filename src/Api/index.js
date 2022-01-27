import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  console.log (type);
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "a9432df171mshae701afff39126cp1b7ff3jsn72b021f4ec7c",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
