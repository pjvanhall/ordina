
import { CurrentWeather, GetCurrentWeatherData } from "@/global/types";

export const getCurrentWeatherData: GetCurrentWeatherData = async (location) => {
    const options = {
      method: 'GET',
      headers: {accept: 'application/json'},
      next: { revalidate: 3600 }
    };
  
    const response = await fetch(`${process.env.TOMORROW_API_URL}?location=${location}&apikey=${process.env.TOMORROW_API_KEY}`, options);
   
    if (!response.ok) {
      const res = await response.json();
     
      // This will activate the closest `error.js` Error Boundary
      throw new Error(`Failed to fetch weather data. ${res.message}`);
    }
   
    const currentWeather: CurrentWeather =  await response.json();

    const {location : { name : locationName }, data: {time: date, values: {weatherCode, temperature}}} = currentWeather;

    return { locationName, date, weatherCode, temperature };
  };