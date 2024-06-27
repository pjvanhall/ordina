import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('https://api.tomorrow.io/v4/weather/realtime', ({ request }) => {
    const currentWeather = {
        location: {name: 'tiel', lat: 0,  lon: 0, type: ''},
        data: {time: new Date(),  values: {weatherCode: 1001, temperature: 21, cloudBase:  0,
          cloudCeiling:  0,
          cloudCover:  0,
          dewPoint:  0,
          freezingRainIntensity: 0,
          humidity:  0,
          precipitationProbability:  0,
          pressureSurfaceLevel:  0,
          rainIntensity: 0,
          sleetIntensity: 0,
          snowIntensity:  0,
          temperatureApparent: 0,
          uvHealthConcern:  0,
          uvIndex:  0,
          visibility:  0,
          windDirection:  0,
          windGust:  0,
          windSpeed:  0,}},
      };

    return HttpResponse.json(currentWeather)
  }),
]