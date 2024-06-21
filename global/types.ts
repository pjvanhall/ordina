export type CurrentWeather = {
    data:     Data;
    location: Location;
}

export type Data = {
    time:   Date;
    values: Values;
}

export type Location = {
    lat:  number;
    lon:  number;
    name: string;
    type: string;
}

export type Values = {
    cloudBase:  number;
    cloudCeiling:  number;
    cloudCover:  number;
    dewPoint:  number;
    freezingRainIntensity:  number;
    humidity:  number;
    precipitationProbability:  number;
    pressureSurfaceLevel:  number;
    rainIntensity:  number;
    sleetIntensity:  number;
    snowIntensity:  number;
    temperature:  number;
    temperatureApparent:  number;
    uvHealthConcern:  number;
    uvIndex:  number;
    visibility:  number;
    weatherCode:  number;
    windDirection:  number;
    windGust:  number;
    windSpeed:  number;
}

export type GetCurrentWeatherData = (location: String) => Promise<CurrentWeather>;
