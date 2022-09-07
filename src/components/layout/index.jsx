import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
				<section className="main">
					{children}
				</section>
			<Footer />
		</>
	)
}

export default Layout