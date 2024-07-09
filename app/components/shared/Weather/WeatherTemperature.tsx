import { WeatherTemperatureProps } from "@/global/types";

export const WeatherTemperature = ({
  temperature,
}: WeatherTemperatureProps) => (
  <div className="text-xl mt-10">{`${temperature} °C`}</div>
);
