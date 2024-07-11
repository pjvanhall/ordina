import { CurrentWeatherContainer } from "@/app/components/CurrentWeather/CurrentWeatherContainer";
import { setRequestContext } from "@/app/utils/requestContext";

export default async function Page({
  params,
}: {
  params: { geoLocation: string; lang: string };
}) {
  const coordinates = decodeURIComponent(params.geoLocation).split(",");

  setRequestContext("longitude", coordinates[0]);
  setRequestContext("latitude", coordinates[1]);
  setRequestContext("lang", params.lang);

  return <CurrentWeatherContainer />;
}
