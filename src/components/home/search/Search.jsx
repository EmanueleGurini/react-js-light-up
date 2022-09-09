import { useRef } from "react";

import styles from "./Search.module.css";
import IconLens from "../../../assets/icons/icon-lens.svg";

const Search = ({ onClick }) => {
  const input = useRef(null);

  const handleClick = () => {
    onClick(input.current.value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.search}>
        <div className={styles["search__left"]}>
          <img src={IconLens} alt="Icon Lens" />
          <input
            type="text"
            placeholder="Enter the URI here.."
            className={styles.input}
            ref={input}
          />
        </div>
        <button onClick={handleClick}>Search</button>
      </div>
    </section>
  );
};

export default Search;
