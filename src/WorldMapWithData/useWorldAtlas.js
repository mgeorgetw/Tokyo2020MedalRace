import { useState, useEffect } from "react";
import { json } from "d3";
import { feature, mesh } from "topojson";

const jsonUrl = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

// Use JSON data
export const useWorldAtlas = () => {
  const [data, setData] = useState(null);
  // console.log(data);

  useEffect(() => {
    // I only want the top 10 countries
    json(jsonUrl).then(topology => {
      const { countries, land } = topology.objects;
      setData({
        land: feature(topology, land),
        interiors: mesh(topology, countries, (a, b) => a !== b)
      });
    });
  }, []);
  return data;
};
