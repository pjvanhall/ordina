"use client";

import { SearchCityProps } from "@/global/types";
import { SearchBox } from "@mapbox/search-js-react";
import { useState } from "react";

const SearchCity = ({ lang }: SearchCityProps) => {
  const [city, setCity] = useState("");

  return (
    <SearchBox
      accessToken={`${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`}
      options={{
        language: lang,
        types: "city",
      }}
      placeholder=""
      value={city}
      onRetrieve={(d) => {
        setCity(d.features[0].properties.full_address);
      }}
    />
  );
};

export default SearchCity;
