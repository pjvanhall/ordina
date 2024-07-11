import { http, HttpResponse } from 'msw';
 
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

    return HttpResponse.json(currentWeather);
  }),
  http.get('https://api.mapbox.com/search/geocode/v6/reverse', ({ request }) => {
    const featureCollection = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          id: "dXJuOm1ieHBsYzpJY2lv",
          geometry: {
            type: "Point",
            coordinates: [
              4.775798,
              51.588856
            ]
          },
          properties: {
            mapbox_id: "dXJuOm1ieHBsYzpJY2lv",
            feature_type: "place",
            full_address: "Breda, Noord-Brabant, Nederland",
            name: "Breda",
            name_preferred: "Breda",
            coordinates: {
              longitude: 4.775798,
              latitude: 51.588856
            },
            place_formatted: "Noord-Brabant, Nederland",
            bbox: [
              4.686006,
              51.485548,
              4.84573,
              51.643198
            ],
            context: {
              region: {
                mapbox_id: "dXJuOm1ieHBsYzpSS2c",
                name: "Noord-Brabant",
                wikidata_id: "Q1101",
                region_code: "NB",
                region_code_full: "NL-NB",
                translations: {
                  nl: {
                    language: "nl",
                    name: "Noord-Brabant"
                  }
                }
              },
              country: {
                mapbox_id: "dXJuOm1ieHBsYzpJcWc",
                name: "Nederland",
                wikidata_id: "Q55",
                country_code: "NL",
                country_code_alpha_3: "NLD",
                translations: {
                  nl: {
                    language: "nl",
                    name: "Nederland"
                  }
                }
              },
              place: {
                mapbox_id: "dXJuOm1ieHBsYzpJY2lv",
                name: "Breda",
                translations: {
                  nl: {
                    language: "nl",
                    name: "Breda"
                  }
                },
                wikidata_id: "Q40844"
              }
            }
          }
        }
      ],
      attribution: "NOTICE: © 2024 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained."
    };

    return HttpResponse.json(featureCollection);
  }),
];