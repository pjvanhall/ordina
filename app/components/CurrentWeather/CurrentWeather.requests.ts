
import { CurrentWeather, GetCurrentWeatherData } from "@/global/types";

export const getCurrentWeatherData: GetCurrentWeatherData = async (geoLocation) => {
    const options = {
      method: 'GET',
      headers: {accept: 'application/json'},
      next: { revalidate: 600 }
    };
  
    const response = await fetch(`${process.env.TOMORROW_API_URL}?location=${geoLocation}&apikey=${process.env.TOMORROW_API_KEY}`, options);
   
    if (!response.ok) {
      const res = await response.json();
     
      // This will activate the closest `error.tsx` Error Boundary
      throw new Error(`Failed to fetch weather data. ${res.message}`);
    }
   
    const currentWeather: CurrentWeather =  await response.json();

    const { location, data: {time: date, values: {weatherCode, temperature}} } = currentWeather;

    return { location, date, weatherCode, temperature };
  };