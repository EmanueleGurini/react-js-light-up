import DoughnutChart from "../doughtnutChart/DoughnutChart";
import OldResults from "../oldResult/OldResults";
import VitalsCard from "../vitalsCard/VitalsCard";
import styles from "./Result.module.css";

const arr = [1, 2, 3, 4, 5, 6];

const Result = () => {
  return (
    <section className={styles.result}>
      <div
        className={`${styles["result__doughnuthChart"]} ${styles["justify-center"]}`}
      >
        <DoughnutChart performanceValue={40} />
      </div>

      <div className={`${styles["result__vitals"]}`}>
        {arr.map((item, index) => {
          const flexDirection = index % 2 ? "left" : "right";

          return (
            <div
              key={`vital-${index}`}
              className={`${styles["vitals__container"]}`}
            >
              <div
                className={`${styles["vitals__card"]} ${
                  styles[`justify-${flexDirection}`]
                }`}
              >
                <VitalsCard />
              </div>
            </div>
          );
        })}
      </div>

      <div className={`${styles[`result__old--vitals`]}`}>
        <h2>Old Result</h2>
        <div className={`${styles[`old-vitals__list`]}`}>
          {arr.map((item, index) => {
            return (
              <div className={`${styles[`old-vitals--container`]}`}>
                <OldResults />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Result;
