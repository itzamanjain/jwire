
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footers'


function Layout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout