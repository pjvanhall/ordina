import { WeatherDateProps } from "@/global/types";

export const WeatherDate = ({ utcDate }: WeatherDateProps) => {
  const localDate = new Date(utcDate).toLocaleString();
  return <div>{localDate}</div>;
};
