import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import PizzaRossaMenu from "./PizzaRossaMenu";
import PizzaBiancaMenu from "./PizzaBiancaMenu";
import PrzystawkiMenu from "./PrzystawkiMenu";
import PizzaWegeMenu from "./PizzaWegeMenu";
import DrinksMenu from "./DrinksMenu";
import SpecialPizzaMenu from "./SpecialPizzaMenu";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <ScrollToTop />
          <Routes>
              <Route index element={<HomePage />}/>
              <Route path='/menu/about_us' element={<AboutUs />} />
              <Route path='/menu/contact' element={<Contact />} />
              <Route path='/menu/pizzarossa' element={<PizzaRossaMenu />} />
              <Route path='/menu/pizzabianca' element={<PizzaBiancaMenu />} />
              <Route path='/menu/przystawki' element={<PrzystawkiMenu />} />
              <Route path='/menu/pizzawege' element={<PizzaWegeMenu />} />
              <Route path='/menu/drinks' element={<DrinksMenu />} />
              <Route path='/menu/specialpizza' element={<SpecialPizzaMenu />} />
          </Routes>
          <Footer />
      </Router>
    </>
  )
}

export default App
