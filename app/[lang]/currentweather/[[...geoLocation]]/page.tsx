import { GetCurrentWeatherData } from "@/global/types";
import { WeatherCode } from "@/global/enums";
import Image from "next/image";

const getCurrentWeatherData: GetCurrentWeatherData = async(location) => {
  const options = {
    method: 'GET',
    headers: {accept: 'application/json'},
    next: { revalidate: 3600 }
  };

  const response = await fetch(`${process.env.TOMORROW_API_URL}?location=${location}&apikey=${process.env.TOMORROW_API_KEY}`, options);
 
  if (!response.ok) {
    const res = await response.json();
   
    throw new Error(`Failed to fetch weather data. ${res.message}`)
  }
 
  return response.json()
}

export default async function Page({ params }: { params: { geoLocation?: string[] } }) {
  
  const geoLocation = params?.geoLocation?.[0];

  const {location : { name : locationName }, data: {time, values: {weatherCode, temperature}}} = await getCurrentWeatherData(geoLocation!);
  
  const weatherCodeValue = WeatherCode[weatherCode];

  const svgName = `${weatherCodeValue.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()}.svg`;

  return (
    <>
        <div>{locationName}</div>
        <div>{new Date(time).toLocaleString()}</div>
        <div className="text-xl mt-10">{`${temperature} °C`}</div>
        <Image
          src={`/${svgName}`}
          width="200"
          height="200"
          alt={weatherCodeValue}
          title={weatherCodeValue}
          priority={true}
        />
       
    </>
  );
}
