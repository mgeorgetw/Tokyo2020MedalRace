import styles from "./css/Input.module.css";

export const Input = ({ min, max, selected, handleChange }) => (
  <div className={styles.inputContainer}>
    <p>Only include entities with at least </p>
    <input
      className={styles.slider}
      type="number"
      min={min}
      max={max}
      value={selected}
      onChange={(e) => e.target.value > 0 && handleChange(e.target.value)}
    />
    <p> medals</p>
  </div>
);
