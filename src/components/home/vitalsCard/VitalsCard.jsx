import styles from "./VitalsCard.module.css";

const VitalsCard = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles["vitals-card"]}`}>
        <h3>{data?.name}</h3>
        <p>{data?.value}</p>
      </div>
    </div>
  );
};

export default VitalsCard;
