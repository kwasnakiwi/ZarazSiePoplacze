import logo from "./assets/images/logo.png";

function Footer() {
    return <div className="footer">
            <ul className="footer-list">
                <li className="footer-list-line"><img src={logo}/></li>
                <li className="footer-list-line">Pizzeria Uno Momento</li>
            </ul>
            <ul className="footer-list">
                <li className="footer-list-line">Strona Główna</li>
                <li className="footer-list-line">Menu</li>
                <li className="footer-list-line">O Nas</li>
                <li className="footer-list-line">Kontakt</li>
            </ul>
            <ul className="footer-list">
                <li className="footer-list-line">Pizzeria Uno Momento</li>
                <li className="footer-list-line">Ul.Topolowa 48a</li>
                <li className="footer-list-line">41-300 Dąbrowa Górnicza</li>
                <li className="footer-list-line">uno.momentodg@gmail.com</li>
                <li className="footer-list-line">577 886 999</li>
            </ul>
        </div>
}

export default Footer








