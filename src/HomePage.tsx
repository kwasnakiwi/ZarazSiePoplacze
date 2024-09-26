import zdjecie2 from './assets/images/Zdjęcie2.png';
import jakaspizza from './assets/images/jakaspizza.png';
import pinkpizza from './assets/images/pinkpizza.png';
import zdjecie3 from './assets/images/Zdjęcie3.png';
import zdjecie from "./assets/images/Zdjęcie.png";
import star from "./assets/images/star-full-icon.png";

function HomePage() {
    return (
      <section className="center-container">
        <div className="web-image"></div>
        <div className="offers">
          <div className="offer">
            <h2 className="offers-title">NOWOŚCI</h2>
            <div className="text-n-image">
              <img src={pinkpizza} alt=""/>
              <div className="offer-text">
                <h3>PINK PIZZA</h3>
                <p>
                  wyjątkowa pizza na różowym cieście, bogato obłożona świeżymi składnikami i unikalnym sosem truskawkowym – spróbuj już dziś!
                </p>
              </div>
            </div>
          </div>
          <div className="offer">
            <h2 className="offers-title">SUPER PROMOCJE</h2>
            <div className="text-n-image">
              <img src={jakaspizza} alt=""/>
              <div className="offer-text">
                <h3>3 W cenie 2</h3>
                <p>
                  Z przyjemnością informujemy, że 
                  od 01.08 do 14.08 mamy super promocję na pyszne.pl
                  Kup dwie duże pizze a małą 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="meet-us">
          <h2 className="title">POZNAJ NAS I NASZ LOKAL</h2>
          <div className="meet-us-line">
            <img src={zdjecie}/>
            <div className="meet-us-text">
              <h3>Lorem ipsum dolor sit amel</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec molestie luctus egestas pretium pellentesque nisl sollicitudin sed et. Magna gravida sed tellus posuere nibh diam adipiscing id. Maecenas amet vulputate in justo facilisis. Odio varius vitae facilisis dapibus. Etiam eu lectus consequat sit porttitor. Enim morbi nulla nisi varius. 
              </p>
            </div>
          </div>
        </div>
        <div className="meals-container">
          <h2 className="title">KULINARNE ARCYDZIEŁA</h2>
          <div className="meals-box">
            <div className="meals">
              <div className="meal">
                <img src={zdjecie2} alt=""/>
              </div>
              <div className="meal">
                <img src={zdjecie2} alt=""/>
              </div>
              <div className="meal">
                <img src={zdjecie2} alt=""/>
              </div>
              <div className="meal">
                <img src={zdjecie2} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="enjoy-container">
          <h2 className="title">Zapraszamy już dziś!</h2>
          <div className="enjoy-image-text">
            <img className="image1" src={zdjecie3} alt=""/>
            <div className="enjoy-text">
              <h4 className="just-eat-h4">Zamów Teraz na Pyszne.pl – Twoja Ulubiona Pizza w Zasięgu Kliknięcia!</h4>
              <ul className="enjoy-list">
                <li className="enjoy-list-line"><div className="enjoy-div"><img src={star}/><span>4.3</span></div><button className="just-eat-btn">Przejdź do Pyszne.pl</button></li>
              </ul>
              <h3>Godziny otwarcia</h3>
              <ul className="opening-hours-list">
                <li className="opening-hours-line">Pn-Czw 13:00 - 21:00</li>
                <li className="opening-hours-line">Pt-Nd 12:00 - 23:00</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
}

export default HomePage