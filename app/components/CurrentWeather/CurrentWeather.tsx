import { CurrentWeatherProps } from "@/global/types";
import { WeatherContainer } from "../shared/Weather/WeatherContainer";
import { getCurrentWeatherData } from "./CurrentWeather.requests";

export const CurrentWeather = async ({ geoLocation }: CurrentWeatherProps) => {
  const { location, date, weatherCode, temperature } =
    await getCurrentWeatherData(geoLocation);

  return (
    <WeatherContainer
      location={location}
      date={date}
      weatherCode={weatherCode}
      temperature={temperature}
    />
  );
};
