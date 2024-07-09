import { CurrentWeatherProps } from "@/global/types";
import { WeatherContainer } from "../shared/Weather/WeatherContainer";
import { getCurrentWeatherData } from "./CurrentWeather.requests";

export const CurrentWeather = async ({ location }: CurrentWeatherProps) => {
  const { locationName, date, weatherCode, temperature } =
    await getCurrentWeatherData(location);

  return (
    <WeatherContainer
      locationName={locationName}
      date={date}
      weatherCode={weatherCode}
      temperature={temperature}
    />
  );
};
