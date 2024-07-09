import Image from "next/image";
import { WeatherImageProps } from "@/global/types";

export const WeatherImage = ({
  svgName,
  weatherDescription,
}: WeatherImageProps) => {
  return (
    <Image
      src={`/${svgName}`}
      width="200"
      height="200"
      alt={weatherDescription}
      title={weatherDescription}
      priority={true}
    />
  );
};
