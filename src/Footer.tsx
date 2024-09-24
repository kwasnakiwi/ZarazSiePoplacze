import footercircle from "./src/assets/images/footer-circle.png";
import footerdownphoto from "./src/assets/images/ig-square.png";

function Footer() {
    return <div className="footer">
            <ul className="footer-list">
                <li className="footer-list-line"><img src={footercircle}/></li>
                <li className="footer-list-line">Blasdalskfiflakslfsal;fkasl;fa</li>
                <li className="footer-list-line">fikasfg;pdsojgsdo;g;a</li>
            </ul>
            <ul className="footer-list">
                <li className="footer-list-line">Strona Główna</li>
                <li className="footer-list-line">Menu</li>
                <li className="footer-list-line">O Nas</li>
                <li className="footer-list-line">Kontakt</li>
            </ul>
            <ul className="footer-list">
            <li className="footer-list-line">Nazwa</li>
                <li className="footer-list-line">Adres</li>
                <li className="footer-list-line">Miasto</li>
                <li className="footer-list-line">Mail</li>
                <li className="footer-list-line">Telefon</li>
                <li className="footer-list-line"><img src={footerdownphoto} alt="ig"/><img src={footerdownphoto} alt="fb"/></li>
            </ul>
        </div>
}

export default Footer