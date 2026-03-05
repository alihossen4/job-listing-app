
import Navbar from './components/Navbar'
import Header from "./components/Header"
import Brand from "./components/brand"
import Category from "./components/Category"
import Dashboard from "./components/Dashboard"
import FeatureJobs from './components/FeatureJobs'
import LatestJobs from './components/LatestJobs'
import Footer from './components/Footer'



function Home() {

  return (
    <>
        <Navbar />
    <div className="container">
        <Header />
        <Brand />
        <Category />
        <FeatureJobs />
        <LatestJobs />
    </div>
        <Footer />
    
    </>
  )
}

export default Home