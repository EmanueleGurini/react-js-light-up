import styles from "./OldResult.module.css";

const OldResults = () => {
  return (
    <div className={`${styles["old-result"]}`}>
      <div>
        <h3>3 settembre 2022</h3>
      </div>
      <div>
        <ul>
          <li>FCP: 2 s</li>
          <li>FCP: 2 s</li>
          <li>FCP: 2 s</li>
          <li>FCP: 2 s</li>
          <li>FCP: 2 s</li>
          <li>FCP: 2 s</li>
        </ul>
      </div>
    </div>
  );
};

export default OldResults;
