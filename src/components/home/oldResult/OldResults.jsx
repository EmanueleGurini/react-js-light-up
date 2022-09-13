import useOldVitals from "../../../utils/hook/useOldResult";
import styles from "./OldResult.module.css";

const OldResults = ({ data }) => {
  const {
    oldVitals: {
      firstContentfulPaint,
      cumulativeLayoutShift,
      speedIndex,
      timeToInteractive,
      largestContentfulPaint,
      totalBlockingTime,
      createdTime,
    },
  } = useOldVitals({ data });

  return (
    <div className={`${styles["old-result"]}`}>
      <div>
        <h3>{createdTime}</h3>
      </div>
      <div>
        <ul>
          <li>CLS: {cumulativeLayoutShift}</li>
          <li>SI: {speedIndex}</li>
          <li>FCP: {firstContentfulPaint}</li>
          <li>TTI: {timeToInteractive}</li>
          <li>LCP: {largestContentfulPaint}</li>
          <li>TBT:{totalBlockingTime}</li>
        </ul>
      </div>
    </div>
  );
};

export default OldResults;
