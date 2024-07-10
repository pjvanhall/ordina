import { WeatherContainerProps, WeatherData } from "@/global/types";
import { getSvgNameAndWeatherDescriptionByWeatherCode } from "./Weather.utils";
import { WeatherImage } from "./WeatherImage";
import { WeatherTemperature } from "./WeatherTemperature";
import { WeatherLocation } from "./WeatherLocation";
import { WeatherDate } from "./WeatherDate";
import { getLocationData } from "./Weather.requests";
import { mainModule } from "process";

export const WeatherContainer = async ({
  weatherCode,
  date,
  location,
  temperature,
  lang,
}: WeatherContainerProps) => {
  const { svgName, weatherDescription } =
    getSvgNameAndWeatherDescriptionByWeatherCode(weatherCode);

  const res = await getLocationData(location.lat, location.lon, lang);

  return (
    <>
      <WeatherLocation locationName={res.features[0].place_name} />
      <WeatherDate utcDate={date} />
      <WeatherTemperature temperature={temperature} />
      <WeatherImage svgName={svgName} weatherDescription={weatherDescription} />
    </>
  );
};
