import { useState, useEffect } from "react";
import { csv, timeParse } from "d3";

// const csvUrl =
//   "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/02be34e5ec0409835f79f61a547b2b42f2c6dfd7/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv";
const csvUrl =
  "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv";

// const sum = (accumulator, currentValue) => accumulator + currentValue;

const parseDay = timeParse("%m/%d/%y");

const transform = rawData => {
  // We only want data for whole countries, filter out rows that represent provinces or states.
  const countriesData = rawData.filter(d => !d["Province/State"]);
  // Slice 4 columns of data to get dates for timeseries
  const days = rawData.columns.slice(4);
  return countriesData.map(d => {
    const countryName = d["Country/Region"];
    const countryTimeseries = days.map(day => ({
      countryName,
      date: parseDay(day),
      deathTotal: +d[day]
    }));
    countryTimeseries.countryName = countryName;
    return countryTimeseries;
  });
};

// Data: Covid daily deaths
export const useData = () => {
  const [data, setData] = useState(null);
  // if (data) console.log(data);

  useEffect(() => {
    csv(csvUrl).then(rawData => {
      setData(transform(rawData).slice(0, 30));
    });
  }, []);
  return data;
};
