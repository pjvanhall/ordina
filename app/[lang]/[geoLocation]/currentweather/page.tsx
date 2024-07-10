import { CurrentWeather } from "@/app/components/CurrentWeather/CurrentWeather";

export default async function Page({
  params,
}: {
  params: { geoLocation: string; lang: string };
}) {
  return <CurrentWeather geoLocation={params.geoLocation} lang={params.lang} />;
}
