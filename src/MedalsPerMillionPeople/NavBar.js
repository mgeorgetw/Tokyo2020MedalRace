import React from "react";
import styles from "./css/Nav.module.css";

export const NavBar = ({ view, setView }) => {
  const buttons = [
    {
      name: "Medals Per Capita",
      view_name: "medals_per_million",
      className:
        view === "medals_per_million"
          ? `${styles.active} ${styles.viewButton}`
          : styles.viewButton,
    },
    {
      name: "Plain Medals Count",
      view_name: "medals",
      className:
        view === "medals"
          ? `${styles.active} ${styles.viewButton}`
          : styles.viewButton,
    },
  ];

  return (
    <div className={styles.nav}>
      Sort by{" "}
      {buttons.map((button) => (
        <ViewButton setView={setView} {...button} key={button.view_name} />
      ))}
    </div>
  );
};

const ViewButton = ({ name, view_name, className, setView }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setView(view_name);
  };
  return (
    <button onClick={handleClick} type="button" className={className}>
      {name}
    </button>
  );
};
