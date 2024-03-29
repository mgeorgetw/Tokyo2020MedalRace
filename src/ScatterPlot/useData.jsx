import { useState, useEffect } from "react";
import { csv, autoType } from "d3";

const csvUrl =
  "https://raw.githubusercontent.com/edomt/tokyo2020/main/output/medals_per_million.csv";

export const useData = () => {
  const [data, setData] = useState(null);
  // if (data) console.log(data);
  useEffect(() => {
    let isMounted = true;
    csv(csvUrl, autoType).then((d) => {
      // console.log("csv data", d);
      if (isMounted) setData(d);
    });
    return () => {
      isMounted = false;
    };
  }, []);
  return data;
};
