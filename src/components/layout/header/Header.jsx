import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
    </header>
  );
};

export default Header;
