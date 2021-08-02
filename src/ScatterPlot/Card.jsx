import styles from "./css/Card.module.css";
export const Card = ({ children }) => (
  <li className={styles.flexCardListItem}>
    <div className={styles.flexCard}>{children}</div>
  </li>
);
