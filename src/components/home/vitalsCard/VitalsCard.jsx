import styles from "./VitalsCard.module.css";

const VitalsCard = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles["vitals-card"]}`}>
        <h3>Cumulative Layout Shift</h3>
        <p>0.79 S</p>
      </div>
    </div>
  );
};

export default VitalsCard;
