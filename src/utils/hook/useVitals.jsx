import { useState, useEffect } from "react";

/**
 * This component is a hook. Get object and return a clean object with vitals ready to use inside components
 * @param {*} param0 object
 * @returns object
 */
const useVitals = ({ data }) => {
  const [vitals, setVitals] = useState([]);

  useEffect(() => {
    setVitals([
      {
        name: "Cumulative Layout Shift",
        value:
          data?.records[0]?.fields?.data?.["cumulative-layout-shift"]
            ?.displayValue,
      },
      {
        name: "Speed Index",
        value: data?.records[0]?.fields?.data?.["speed-index"]?.displayValue,
      },
      {
        name: "First Contentful Paint",
        value:
          data?.records[0]?.fields?.data?.["first-contentful-paint"]
            ?.displayValue,
      },
      {
        name: "Time to Interactive",
        value:
          data?.records[0]?.fields?.data?.["time-to-interactive"]?.displayValue,
      },
      {
        name: "Largest Contentful Paint",
        value:
          data?.records[0]?.fields?.data?.["largest-contentful-paint"]
            ?.displayValue,
      },
      {
        name: "Total Blocking Time",
        value:
          data?.records[0]?.fields?.data?.["total-blocking-time"]?.displayValue,
      },
    ]);
  }, [data]);

  return { vitals };
};

export default useVitals;
