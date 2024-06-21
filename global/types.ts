export type CurrentWeather = {
    data:     Data;
    location: Location;
}

export type Data = {
    time:   Date;
    values: { [key: string]: number };
}

export type Location = {
    lat:  number;
    lon:  number;
    name: string;
    type: string;
}

export type GetCurrentWeatherData = (location: String) => Promise<CurrentWeather>;