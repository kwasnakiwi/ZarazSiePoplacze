import pizzalogo from'./src/assets/images/pizza-logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return <div className="navbar">
        <nav>
        <ul className="navbar-list">
            <li className="navbar-line"><Link to="/"><img src={pizzalogo} alt="logo"/></Link></li>
            <li className="navbar-line"><Link to="/menu1">MENU</Link></li>
            <li className="navbar-line"><Link to="/about_us">O NAS</Link></li>
            <li className="navbar-line"><a>KONTAKT</a></li>
        </ul>
        <h3 className="under-nav">tel.421 325 326<br/>
         spas@xd.com</h3>
    </nav>
  </div>
}

export default Navbar