import { useState } from "react";
import { useData } from "./useData";
import { format, scaleLinear, scaleOrdinal, extent } from "d3";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { ColorLegend } from "./ColorLegend";
// import { Dropdown } from "./Dropdown";
import ReactDropdown from "react-dropdown";
import { Marks } from "./Marks";
import "react-dropdown/style.css";

const width = 960;
const height = 450;
const margin = { top: 20, right: 200, bottom: 60, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 40;
const circleRadius = 6;
const fadeOpacity = 0.2;
const attributes = [
  { value: "sepal_length", label: "Sepal Length" },
  { value: "sepal_width", label: "Sepal Width" },
  { value: "petal_length", label: "Petal Length" },
  { value: "petal_width", label: "Petal Width" },
  { value: "species", label: "Species" }
];

// The chart's real height and width
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

export const ScatterPlotWithMenus = () => {
  const getLabel = value => {
    for (let i = 0; i < attributes.length; i++) {
      if (attributes[i].value === value) return attributes[i].label;
    }
  };

  const initialXAttribute = "petal_length";
  const [xAttribute, setXAttribute] = useState(initialXAttribute);
  const xValue = d => d[xAttribute];
  const xAxisLabel = getLabel(xAttribute);

  const initialYAttribute = "sepal_width";
  const [yAttribute, setYAttribute] = useState(initialYAttribute);
  const yValue = d => d[yAttribute];
  const yAxisLabel = getLabel(yAttribute);

  const colorValue = d => d.species;
  const ColorLegendLabel = "Species";
  const [hoveredValue, setHoveredValue] = useState(null);

  const siFormat = format(".2s");
  const xAxisTickFormat = tickValue => siFormat(tickValue).replace("G", "B");

  const data = useData();
  if (!data) return <pre>"Loading..."</pre>;
  console.log("data:", data[0]);

  const filteredData = data.filter(d => colorValue(d) === hoveredValue);

  // X axis is population, thus use linear scale
  const xScale = scaleLinear()
    // Domain is an array of actual data, starts from 0 to the max of all countries
    // d3.max(iterable[, accessor])
    .domain(extent(data, xValue))
    // Range is where the data is shown in pixels, starts from 0 to chart's width
    .range([0, innerWidth])
    .nice();

  // Y is countries is categorical, band scale is for ordinal or categorical dimension
  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight]);

  const colorScale = scaleOrdinal()
    .domain(data.map(colorValue))
    .range(["#E3BA22", "#E6842A", "#137B80"]);

  return (
    <>
      <div className="menus-container">
        <span className="dropdown-label">X</span>
        <ReactDropdown
          options={attributes}
          value={xAttribute}
          onChange={({ value }) => setXAttribute(value)}
        />
        <span className="dropdown-label">Y</span>
        <ReactDropdown
          options={attributes}
          value={yAttribute}
          onChange={({ value }) => setYAttribute(value)}
        />
      </div>
      <svg width={width} height={height}>
        {/* Adds margin to left and top  */}
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom
            innerHeight={innerHeight}
            xScale={xScale}
            tickFormat={xAxisTickFormat}
            tickOffset={7}
          />
          <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor="middle"
          >
            {xAxisLabel}
          </text>
          <AxisLeft innerWidth={innerWidth} yScale={yScale} tickOffset={7} />
          <text
            className="axis-label"
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset}, ${innerHeight /
              2}) rotate(-90)`}
          >
            {yAxisLabel}
          </text>
          <g transform={`translate(${innerWidth + 50}, 45)`}>
            <text className="axis-label" x={-7} y={-24}>
              {ColorLegendLabel}
            </text>
            <ColorLegend
              colorScale={colorScale}
              tickSpacing={24}
              tickSize={circleRadius}
              tickTextOffset={12}
              onHover={setHoveredValue}
              hoveredValue={hoveredValue}
              fadeOpacity={fadeOpacity}
            />
          </g>
          <g opacity={hoveredValue ? fadeOpacity : 1}>
            <Marks
              data={data}
              xValue={xValue}
              xScale={xScale}
              yValue={yValue}
              yScale={yScale}
              colorScale={colorScale}
              colorValue={colorValue}
              tooltipFormat={xAxisTickFormat}
              circleRadius={circleRadius}
            />
          </g>
          <Marks
            data={filteredData}
            xValue={xValue}
            xScale={xScale}
            yValue={yValue}
            yScale={yScale}
            colorScale={colorScale}
            colorValue={colorValue}
            tooltipFormat={xAxisTickFormat}
            circleRadius={circleRadius}
          />
        </g>
      </svg>
    </>
  );
};
