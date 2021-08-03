import styles from "./css/Input.module.css";

export const Input = ({ min, max, selected, handleChange }) => (
  <div className={styles.inputContainer}>
    <p>Include entities with at least </p>
    <input
      type="number"
      min={min}
      max={max}
      value={selected}
      onChange={(e) => e.target.value > 0 && handleChange(e.target.value)}
    />
    <p> medals</p>
  </div>
);
