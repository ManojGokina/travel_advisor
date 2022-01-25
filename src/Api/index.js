import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne)=>{
    try{
        const {data:{data}} = await axios.get(URL, {
            method: 'GET',
          url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            restaurant_tagcategory_standalone: '10591',
            restaurant_tagcategory: '10591',
            limit: '30',
            currency: 'USD',
            open_now: 'false',
            lunit: 'km',
            lang: 'en_US'
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'a9432df171mshae701afff39126cp1b7ff3jsn72b021f4ec7c'
          }
        }
        );
        return data;
    }catch(error){
      console.log(error);
    }
};