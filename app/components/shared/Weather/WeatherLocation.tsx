import { WeatherLocationProps } from "@/global/types";

export const WeatherLocation = ({ locationName }: WeatherLocationProps) => {
  return <div>{locationName}</div>;
};
