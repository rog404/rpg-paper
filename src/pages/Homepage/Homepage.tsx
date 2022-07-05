import './Homepage.css'

import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Main from "../../components/Main/Main"

const Homepage = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Homepage