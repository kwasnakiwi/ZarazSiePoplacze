
import offer1 from './assets/images/Rectangle 157.png';
import offer2 from './assets/images/Rectangle 156.png';
import offer3 from './assets/images/Rectangle 159.png';
import offer4 from './assets/images/Rectangle 153.png';
import zdjecie from "./assets/images/Zdjęcie (1).png";
import star from "./assets/images/star-full-icon.png";
import meal1 from './assets/images/1.png';
import meal2 from './assets/images/2.png';
import meal3 from './assets/images/pizza.jpg';
import meal4 from './assets/images/4.png';
import meal5 from './assets/images/herbata.jpg';
import meal6 from './assets/images/6.png';
import meal7 from './assets/images/pizza2.jpg';
import meal8 from './assets/images/8.png';
import { Helmet } from 'react-helmet-async';

function HomePage() {
    return (<>
      <Helmet>
        <title>Pizzeria Uno Momento </title>
        <meta name='description'
        content='Zapraszamy do Uno Momento! Odkryj autentyczne włoskie pizze, 
        przygotowywane na świeżo z najlepszych składników. Idealne miejsce na wieczór 
        z przyjaciółmi lub romantyczną kolację. Skosztuj naszych wyjątkowych smaków!' />
      </Helmet>
      <section className="center-container-main">
        <div className="web-image"></div>
        <h1 className="offers-title">ZŁAP OKAZJE TYGODNIA!</h1>
        <div className='offers-box'>
          <div className="offers">
            <div className="offer">
              <img src={offer4} alt="" />

            </div>
            <div className="offer">
              <img src={offer2} alt="" />

            </div>
            <div className="offer">
              <img src={offer1} alt="" />

            </div>
            <div className="offer">
              <img src={offer3} alt="" />

            </div>
            <div className='textes'>
              <div id="text1">
                <h2>Poniedziałek:</h2>
                <h1>2 sosy gratis!</h1>
              </div>
              <div id="text2">
                <h2>Wtorek:</h2>
                <h1>Sałatki 20%<br/>taniej!</h1>
              </div>
              <div id="text3">
                <h2>Środa:</h2>
                <h1>Coca-Cola <br/>0,5L GRATIS!</h1>
              </div>
              <div id="text4">
                <h2>Czwartek:</h2>
                <h1>Każda druga<br/>
                pizza 50% <br/>taniej!</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="meet-us">
          <h2 className="title">POZNAJ NAS I NASZ LOKAL</h2>
          <div className="meet-us-line">
            <img src={zdjecie}/>
            <div className="meet-us-text">
              <h3>Ludzie i Miejsce, które pokochasz</h3>
              <p>
                Uno Momento to miejsce, gdzie pasja do włoskiej kuchni spotyka się z rodzinną atmosferą. Nasz przytulny lokal to idealne miejsce na spotkania przy wyśmienitej pizzy, przygotowanej według tradycyjnych receptur. Zajrzyj do nas, poczuj smak prawdziwej Italii i daj się oczarować wyjątkowym klimatem naszego wnętrza.
              </p>
            </div>
          </div>
        </div>
        <div className="meals-container">
          <h2 className="title">KULINARNE ARCYDZIEŁA</h2>
          <div className="meals-box">
            <div className="meals">
              <div className="meal">
                <img src={meal1} alt=""/>
              </div>
              <div className="meal">
                <img src={meal2} alt=""/>
              </div>
              <div className="meal">
                <img src={meal3} alt=""/>
              </div>
              <div className="meal">
                <img src={meal4} alt=""/>
              </div>
              <div className="meal">
                <img  src={meal5} alt=""/>
              </div>
              <div className="meal">
                <img src={meal6} alt=""/>
              </div>
              <div className="meal">
                <img src={meal7} alt=""/>
              </div>
              <div className="meal">
                <img src={meal8} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="enjoy-container">
          <h2 className="title">Zapraszamy już dziś!</h2>
          <div className="enjoy-image-text">
          <iframe className='image1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2546.0023862185853!2d19.208641812643066!3d50.34786087145418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d9162db3886d%3A0x70ccf7ef46dafc5!2sPizzeria%20Uno%20Momento!5e0!3m2!1spl!2spl!4v1728126544696!5m2!1spl!2spl" width="750" height="560" style={{border:0}}  loading="lazy" ></iframe>
            <div className="enjoy-text">
              <h4 className="just-eat-h4">Zamów teraz na Pyszne.pl – Twoja ulubiona pizza w zasięgu kliknięcia!</h4>
              <ul className="enjoy-list">
                <li className="enjoy-list-line"><div className="enjoy-div"><img src={star}/><span>4.5</span></div><a href='https://www.pyszne.pl/menu/pizzeria-uno-momento-dabrowa-gornicza'><button className="just-eat-btn">zamów teraz!</button></a></li>
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
      </>
    );
}

export default HomePage