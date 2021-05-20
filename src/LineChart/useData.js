import { useState, useEffect } from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv";

// Data: Week Temperature SF
export const useData = () => {
  const [data, setData] = useState(null);
  if (data) console.log(data[0]);

  useEffect(() => {
    const row = d => {
      // + = parseFloat()
      d.temperature = +d.temperature;
      d.timestamp = new Date(d.timestamp);
      return d;
    };
    // I only want the top 10 countries
    csv(csvUrl, row).then(setData);
  }, []);
  return data;
};
