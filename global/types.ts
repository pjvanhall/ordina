export type CurrentWeather = {
    data:     Data;
    location: Location;
}

export type Data = {
    time:   string;
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

export type WeatherData = {
    location: {lat: number, lon: number};
    date: string;
    weatherCode: number;
    temperature: number;
}

export type GetCurrentWeatherData = (location: string) => Promise<WeatherData>;

export type GetLocationData = (longitude: number, latitude: number, lan: string) => Promise<any>;

export type GetSvgNameByWeatherCode = (weatherCode: number) => { svgName: string, weatherDescription: string };

export type IPData = {
    ip:             string;
    is_eu:          boolean;
    city:           string;
    region:         string;
    region_code:    string;
    region_type:    string;
    country_name:   string;
    country_code:   string;
    continent_name: string;
    continent_code: string;
    latitude:       number;
    longitude:      number;
    postal:         string;
    calling_code:   string;
    flag:           string;
    emoji_flag:     string;
    emoji_unicode:  string;
    asn:            Asn;
    carrier:        Carrier;
    languages:      Language[];
    currency:       Currency;
    time_zone:      TimeZone;
    threat:         Threat;
    count:          string;
}

export type Asn = {
    asn:    string;
    name:   string;
    domain: string;
    route:  string;
    type:   string;
}

export type Carrier = {
    name: string;
    mcc:  string;
    mnc:  string;
}

export type Currency= {
    name:   string;
    code:   string;
    symbol: string;
    native: string;
    plural: string;
}

export type Language = {
    name:   string;
    native: string;
    code:   string;
}

export type Threat = {
    is_tor:            boolean;
    is_icloud_relay:   boolean;
    is_proxy:          boolean;
    is_datacenter:     boolean;
    is_anonymous:      boolean;
    is_known_attacker: boolean;
    is_known_abuser:   boolean;
    is_threat:         boolean;
    is_bogon:          boolean;
    blocklists:        any[];
}

export type TimeZone = {
    name:         string;
    abbr:         string;
    offset:       string;
    is_dst:       boolean;
    current_time: Date;
}

export interface CurrentWeatherProps {
    geoLocation: string;
    lang: string
}

export interface WeatherImageProps {
    svgName: string;
    weatherDescription: string;
}

export interface WeatherLocationProps {
    locationName: string;
}

export interface WeatherDateProps {
    utcDate: string;
}

export interface WeatherTemperatureProps {
    temperature: number;
}

export type SearchCityProps = {
    lang: string;
}

export type NavbarProps = {
    lang: string;
}

export interface WeatherContainerProps {
    lang: string
    weatherCode: number;
    date:string;
    location: {lat: number, lon: number};
    temperature: number;
}

export interface RootLayoutProps {
    children: React.ReactNode;
    params: { lang: string };
  }

  export interface City {
    name:            string;
    name_preferred:  string;
    mapbox_id:       string;
    feature_type:    string;
    full_address:    string;
    place_formatted: string;
    context:         Context;
    coordinates:     Coordinates;
    bbox:            number[];
    language:        string;
    maki:            string;
    metadata:        Metadata;
  }
  
  export interface Context {
    country: Country | undefined;
    region:  Region;
    place:   Place;
  }
  
  export interface Country {
    id:                   string;
    name:                 string;
    country_code:         string;
    country_code_alpha_3: string;
  }
  
  export interface Place {
    id:   string;
    name: string;
  }
  
  export interface Region {
    id:               string;
    name:             string;
    region_code:      string;
    region_code_full: string;
  }
  
  export interface Coordinates {
    latitude:  number;
    longitude: number;
  }
  
  export interface Metadata {
  }
  
  