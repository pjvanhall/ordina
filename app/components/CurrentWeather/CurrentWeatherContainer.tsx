import { getCurrentWeatherData } from "./CurrentWeather.requests";
import { getRequestContext } from "@/app/utils/requestContext";
import { CurrentWeather } from "./CurrentWeather";

export const CurrentWeatherContainer = async () => {
  const longitude = +getRequestContext("longitude")!;
  const latitude = +getRequestContext("latitude")!;

  const { date, weatherCode, temperature } = await getCurrentWeatherData(
    longitude,
    latitude
  );

  return (
    <CurrentWeather
      date={date}
      weatherCode={weatherCode}
      temperature={temperature}
    />
  );
};
