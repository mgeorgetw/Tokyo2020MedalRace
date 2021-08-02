import React from "react";
import styles from "./css/Nav.module.css";

export const NavBar = ({ view, setView }) => {
  // A series of buttons to switch between views of charts.
  const buttons = [
    {
      name: "Medals Per Million",
      view_name: "mpm",
      className: view === "mpm" ? "active view-button" : "view-button",
    },
    {
      name: "Total Medals",
      view_name: "medals",
      className: view === "medals" ? "active view-button" : "view-button",
    },
  ];

  return (
    <div className={styles.nav}>
      {buttons.map((button) => (
        <ViewButton setView={setView} {...button} key={button.view_name} />
      ))}
    </div>
  );
};

const ViewButton = ({ name, view_name, className, setView }) => {
  // A series of buttons to switch between views of charts.
  const handleClick = (e) => {
    e.preventDefault();
    setView(view_name);
  };
  // Changes the button label according to current view.
  return (
    <button onClick={handleClick} type="button" className={className}>
      {name}
    </button>
  );
};
