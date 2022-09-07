import Footer from './Footer'
import Header from './Header'

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