"use client";

import { Properties, SearchCityProps } from "@/global/types";
import { SearchBox } from "@mapbox/search-js-react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getGeoLocationRegex } from "@/app/utils/regex";

const SearchCity = ({ lang }: SearchCityProps) => {
  const [city, setCity] = useState<Properties | null>(null);
  const { push } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (city) {
      const geoLocationRegex = getGeoLocationRegex();

      const arr = geoLocationRegex.exec(pathname);

      const path = pathname.replace(
        arr![0],
        `/${city?.coordinates.longitude},${city?.coordinates.latitude}/`
      );

      push(path);
    }
  }, [push, city, pathname]);

  return (
    <SearchBox
      accessToken={`${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`}
      options={{
        language: lang,
        types: "city",
      }}
      value={city?.full_address ?? ""}
      onRetrieve={(searchBoxRetrieveResponse) => {
        setCity(searchBoxRetrieveResponse.features[0].properties as City);
      }}
    />
  );
};

export default SearchCity;
