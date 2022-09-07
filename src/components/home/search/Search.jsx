import styles from './Search.module.css'
import IconLens from "../../../assets/icons/icon-lens.svg";

const Search = () => {
	return (
		<section className={styles.container}>
			<div className={styles.search}>
			<div className={styles["search__left"]}>
        <img src={IconLens} alt="Icon Lens" />
        <input
          type="text"
          placeholder="Enter the URI here.."
          onChange={() => console.log('isChanging')}
          className={styles.input}
        />
      </div>
      <button onClick={() => console.log('clicked')}>Search</button>
			</div>
		</section>
	)
}

export default Search