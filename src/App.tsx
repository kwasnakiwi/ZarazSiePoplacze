import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";
import Menu5 from "./Menu5";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <>
      <Router basename="/pizzeria">
          <Navbar/>
          <ScrollToTop />
          <Routes>
              <Route index element={<HomePage/>}/>
              <Route path="/about_us" element={<AboutUs/>} />
              <Route path='/contact' element={<Contact />} />
              <Route path="/menu1" element={<Menu1/>} />
              <Route path="/menu2" element={<Menu2/>} />
              <Route path="/menu3" element={<Menu3/>} />
              <Route path="/menu4" element={<Menu4/>} />
              <Route path="/menu5" element={<Menu5/>} />
          </Routes>
          <Footer />
      </Router>
    </>
  )
}

export default App
