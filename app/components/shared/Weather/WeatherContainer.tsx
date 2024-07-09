import { WeatherData } from "@/global/types";
import { getSvgNameAndWeatherDescriptionByWeatherCode } from "./Weather.helpers";
import { WeatherImage } from "./WeatherImage";
import { WeatherTemperature } from "./WeatherTemperature";
import { WeatherLocation } from "./WeatherLocation";
import { WeatherDate } from "./WeatherDate";

export const WeatherContainer = ({
  weatherCode,
  date,
  locationName,
  temperature,
}: WeatherData) => {
  const { svgName, weatherDescription } =
    getSvgNameAndWeatherDescriptionByWeatherCode(weatherCode);

  return (
    <>
      <WeatherLocation locationName={locationName} />
      <WeatherDate utcDate={date} />
      <WeatherTemperature temperature={temperature} />
      <WeatherImage svgName={svgName} weatherDescription={weatherDescription} />
    </>
  );
};
