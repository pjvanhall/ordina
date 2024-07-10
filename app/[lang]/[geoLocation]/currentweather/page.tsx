import { CurrentWeather } from "@/app/components/CurrentWeather/CurrentWeather";

export default async function Page({
  params,
}: {
  params: { geoLocation: string };
}) {
  return <CurrentWeather geoLocation={params.geoLocation} />;
}
