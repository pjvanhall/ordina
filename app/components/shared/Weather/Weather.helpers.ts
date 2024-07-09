import { GetSvgNameByWeatherCode } from "@/global/types";
import { WeatherCode } from "./Weather.enums";

export const getSvgNameAndWeatherDescriptionByWeatherCode: GetSvgNameByWeatherCode = (weatherCode: number) => {

    const weatherCodeValue = WeatherCode[weatherCode];

    const weatherDescription = weatherCodeValue.replace(/([a-z])([A-Z])/g, '$1 $2');
    
    const svgName = `${weatherCodeValue.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()}.svg`;

    return {svgName, weatherDescription};
};
