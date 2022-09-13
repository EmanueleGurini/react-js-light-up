import styles from "./Instructions.module.css";

const Instructions = () => {
  return (
    <section className="instructions">
      <div className={styles.container}>
        <h2>Instruction:</h2>
        <p>
          Please, take a moment to read these instruction before using light-up.
          <br />
          Light-up is a tool that consume Google Light-House API, so, maybe, at
          the moment you don’t really need this product. But, if you want to
          take under control all the search made on a specific url, you’re in
          the right place.
        </p>

        <h3>How does Light-Up works?</h3>
        <ol>
          <li>
            Enter the URL and press Analyze. Please, check your URL before press
            Analyze button: your URL should starts with http:// or https://
            protocol and should be like this
            http://www.firstleveldomain.seconleveldomain e so on.
            <br />
            If your URL does’t respect these rules, your will be noticed by
            light-up;
          </li>

          <li>
            Loading starts and you will see a loading spinner until your data
            are ready;
          </li>

          <li>
            When your data will be ready, you will see all your data in order
            under the search section, and if your URL will match with other
            searches made before thought light-up, you can control them and
            compare them with your last search;
          </li>
        </ol>

        <h3>Help us to improve light-up:</h3>
        <p>
          Light up is a newborn product available with free license. Feel free
          to use light-up, modify it, improve it for your personal uses.
          <br />
          <br />
          Good search!
        </p>
      </div>
    </section>
  );
};

export default Instructions;
