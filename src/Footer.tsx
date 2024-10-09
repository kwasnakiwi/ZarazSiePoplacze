import logo from "./assets/images/logo.png";
import { Link } from 'react-router-dom';

function Footer() {
    return <div className="footer">
            <Link to='/'><ul className="footer-list">
                <li className="footer-list-line"><img src={logo}/></li>
                <li className="footer-list-line">Pizzeria Uno Momento</li>
            </ul></Link>
            <ul className="footer-list">
                <li className="footer-list-line"><Link to='/'>Strona Główna</Link></li>
                <li className="footer-list-line"><Link to='/menu1'>Menu</Link></li>
                <li className="footer-list-line"><Link to='/about_us'>O Nas</Link></li>
                <li className="footer-list-line"><Link to='/contact'>Kontakt</Link></li>
            </ul>
            <ul className="footer-list">
                <li className="footer-list-line">Pizzeria Uno Momento</li>
                <li className="footer-list-line">Ul.Topolowa 48a</li>
                <li className="footer-list-line">41-300 Dąbrowa Górnicza</li>

            </ul>
        </div>
}

export default Footer








