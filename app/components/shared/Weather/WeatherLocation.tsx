import { WeatherLocationProps } from "@/global/types";
import { getLocationData } from "./Weather.requests";

export const WeatherLocation = async ({ location }: WeatherLocationProps) => {
  const res = await getLocationData(location.lat, location.lon, "en");

  return <div>{`${location.lat}, ${location.lon}`}</div>;
};
