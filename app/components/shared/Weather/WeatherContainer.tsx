import { WeatherContainerProps } from "@/global/types";
import { getSvgNameAndWeatherDescriptionByWeatherCode } from "./Weather.utils";
import { WeatherImage } from "./WeatherImage";
import { WeatherTemperature } from "./WeatherTemperature";
import { WeatherLocation } from "./WeatherLocation";
import { WeatherDate } from "./WeatherDate";
import { getLocationData } from "./Weather.requests";
import { getRequestContext } from "@/app/utils/requestContext";

export const WeatherContainer = async ({
  weatherCode,
  date,
  temperature,
}: WeatherContainerProps) => {
  const longitude = +getRequestContext("longitude")!;
  const latitude = +getRequestContext("latitude")!;
  const lang = getRequestContext("lang")!;

  const { svgName, weatherDescription } =
    getSvgNameAndWeatherDescriptionByWeatherCode(weatherCode);

  const locationProperties = await getLocationData(longitude, latitude, lang);

  return (
    <>
      <WeatherLocation locationName={locationProperties.full_address} />
      <WeatherDate utcDate={date} />
      <WeatherTemperature temperature={temperature} />
      <WeatherImage svgName={svgName} weatherDescription={weatherDescription} />
    </>
  );
};
