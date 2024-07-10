import { WeatherData } from "@/global/types";
import { getSvgNameAndWeatherDescriptionByWeatherCode } from "./Weather.helpers";
import { WeatherImage } from "./WeatherImage";
import { WeatherTemperature } from "./WeatherTemperature";
import { WeatherLocation } from "./WeatherLocation";
import { WeatherDate } from "./WeatherDate";

export const WeatherContainer = ({
  weatherCode,
  date,
  location,
  temperature,
}: WeatherData) => {
  const { svgName, weatherDescription } =
    getSvgNameAndWeatherDescriptionByWeatherCode(weatherCode);

  return (
    <>
      <WeatherLocation location={location} />
      <WeatherDate utcDate={date} />
      <WeatherTemperature temperature={temperature} />
      <WeatherImage svgName={svgName} weatherDescription={weatherDescription} />
    </>
  );
};
