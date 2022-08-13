import Navbar from './Navbar'
const Layout = ({children}) => {
  return (
	<div className="bg-white-100 w-100% h-screen container mx-auto">
		<Navbar/>
		{children}
	</div>
  )
}

export default Layout