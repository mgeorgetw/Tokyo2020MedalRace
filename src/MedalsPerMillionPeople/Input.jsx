import styles from "./css/Input.module.css";

export const Input = ({ min, max, selected, handleChange }) => (
  <div className={styles.inputContainer}>
    <p>Only include {Number(selected) === max ? "all" : "top"}</p>
    <input
      className={styles.slider}
      type="number"
      min={min}
      max={max}
      step="10"
      value={selected}
      onChange={(e) => e.target.value > 0 && handleChange(e.target.value)}
    />
    <p> teams</p>
  </div>
);
