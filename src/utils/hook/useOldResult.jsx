import { useState, useEffect } from "react";

/**
 * This component is a hook. Get object and return a clean object with vitals ready to use inside components
 * @param {*} param0 object
 * @returns object
 */
const useOldVitals = ({ data }) => {
  const initialState = {
    firstContentfulPaint: "",
    cumulativeLayoutShift: "",
    timeToInteractive: "",
    largestContentfulPaint: "",
    totalBlockingTime: "",
    speedIndex: "",
    createdTime: "",
  };
  const [oldVitals, setOldVitals] = useState(initialState);

  const { createdTime, fields } = data;

  useEffect(() => {
    setOldVitals({
      firstContentfulPaint:
        fields?.data?.["first-contentful-paint"]?.displayValue,
      cumulativeLayoutShift:
        fields?.data?.["cumulative-layout-shift"]?.displayValue,
      timeToInteractive: fields?.data?.["time-to-interactive"]?.displayValue,
      largestContentfulPaint:
        fields?.data?.["largest-contentful-paint"]?.displayValue,
      totalBlockingTime: fields?.data?.["total-blocking-time"]?.displayValue,
      speedIndex: fields?.data?.["speed-index"]?.displayValue,
      createdTime: createdTime,
    });
  }, [data]);

  return { oldVitals };
};

export default useOldVitals;
