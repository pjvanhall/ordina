import { CurrentWeatherProps } from "@/global/types";
import { WeatherContainer } from "../shared/Weather/WeatherContainer";

export const CurrentWeather = ({
  date,
  weatherCode,
  temperature,
}: CurrentWeatherProps) => {
  return (
    <WeatherContainer
      date={date}
      weatherCode={weatherCode}
      temperature={temperature}
    />
  );
};
