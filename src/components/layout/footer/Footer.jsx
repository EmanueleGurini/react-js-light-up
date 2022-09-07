import styles from './Footer.module.css'

const Footer = () => {
	return (
		<section className={`${styles.container} ${styles.footer}`}>
			<p>Made with <span>62 Coffee</span> by Emanuele Gurini</p>
		</section>
	)
}

export default Footer