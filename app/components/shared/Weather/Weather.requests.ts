import { CurrentWeather, GetCurrentWeatherData, GetLocationData } from "@/global/types";

export const getLocationData: GetLocationData = async (longitude, latitude, lan) => {
    const options = {
      method: 'GET',
      headers: {accept: 'application/json'},
    };
  
    const response = await fetch(`${process.env.MAPBOX_API_URL}/${latitude},${longitude}.json?types=place&language=${lan}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`, options);
   
    if (!response.ok) {
      const res = await response.json();
     
      // This will activate the closest `error.tsx` Error Boundary
      throw new Error(`Failed to fetch weather data. ${res.message}`);
    }
   
    const locationData =  await response.json();

    return locationData;
  };