import styles from "./css/Input.module.css";

export const Input = ({ min, max, selected, handleChange }) => (
  <div className={styles.inputContainer}>
    <p>Include {Number(selected) === max ? "all" : "top"}</p>
    <input
      type="number"
      min={min}
      max={max}
      step="10"
      value={selected}
      onChange={(e) => handleChange(e.target.value)}
    />
    <p> entities</p>
  </div>
);
