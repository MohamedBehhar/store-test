import Navbar from './Navbar'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
	<div className="bg-white-100 w-100% h-screen container mx-auto text-gray-700 font-poppins">
		<Navbar/>
		{children}
		<Footer />
	</div>
  )
}

export default Layout