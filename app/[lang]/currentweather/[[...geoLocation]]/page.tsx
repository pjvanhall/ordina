import { CurrentWeather } from "@/app/components/CurrentWeather/CurrentWeather";

export default async function Page({
  params,
}: {
  params: { geoLocation?: string[] };
}) {
  const location = params?.geoLocation?.[0]!;

  return <CurrentWeather location={location} />;
}
