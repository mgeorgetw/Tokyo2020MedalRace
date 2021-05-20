import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//// The following is the basic template for vega-lite-api
// import { config } from "./config";
// import { getData } from "./getData";
// import { viz } from "./viz";

// const { vega, vegaLite, vl, vegaTooltip } = window;
// const { Handler } = vegaTooltip;

// vl.register(vega, vegaLite, {
//   view: { renderer: "svg" },
//   init: view => {
//     view.tooltip(new Handler().call);
//   }
// });

// const run = async () => {
//   const marks = viz
//     .data(await getData())
//     .width(window.innerWidth)
//     .height(window.innerHeight)
//     .autosize({ type: "fit", contains: "padding" })
//     .config(config);

//   document.body.appendChild(await marks.render());
// };
// run();
