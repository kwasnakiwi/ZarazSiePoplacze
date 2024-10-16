import telephone from './assets/images/phone-call-icon 1 (1).png';
import malpa from './assets/images/attherate-icon 1 (1).png';
import MyComponent from "./Accordion";

function Contact() {
  return(
    <>
      
    <div className="center-container center-container-main">
      <div className="contact-title-box">
        <h1 className="contact-title">Pytania, zamówienia, uwagi? Skontaktuj się z nami!</h1>
      </div>
      <div className="contact-content">
        <div className="contact-content-left">
          <p className="contact-text">
            Chcesz dowiedzieć się więcej o naszej ofercie, złożyć zamówienie lub podzielić 
            się uwagami? Napisz do nas lub zadzwoń. Jesteśmy tu dla Ciebie i chętnie pomożemy!
          </p>
          <ul className="contact-list">
            <li>
              <img src={telephone} />577 886 999
            </li>
            <li>
              <img src={malpa} />uno.momentodg@gmail.com
            </li>
          </ul>
        </div>
        <div className="contact-content-right">
          <iframe className='image2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2546.0023862185853!2d19.208641812643066!3d50.34786087145418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d9162db3886d%3A0x70ccf7ef46dafc5!2sPizzeria%20Uno%20Momento!5e0!3m2!1spl!2spl!4v1728126544696!5m2!1spl!2spl" width="783" height="519" style={{border:0}}  loading="lazy" ></iframe>
        </div>
      </div>
      <div className="wrapper">
        <h2><b>Najczęściej zadawane pytania:</b><br/>
        wszystko, co musisz wiedzieć o naszej pizzerii!</h2>
        <div className="faq">
          <button className="accordion accordion1">
          1. Czy na terenie obiektu dostępny jest parking?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
            Tak, przed budynkiem znajduje się darmowy parking.
            </p>
          </div>
          <hr className="line"/>
        </div>
        <div className="faq">
          <button className="accordion">
          2. Czy akceptujecie zwierzęta?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
            Tak, czworonogi na smyczy są u nas zawsze mile widziane 😊
            </p>
          </div>
          <hr className="line"/>
        </div>
        <div className="faq">
          <button className="accordion">
          3. Jakie metody płatności są akceptowane w lokalu?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
            Akceptujemy płatności gotówkowe, karty kredytowe i debetowe oraz płatności mobilne (BLIK).
            </p>
          </div>
          <hr className="line"/>
        </div>
        <div className="faq">
          <button className="accordion">
          4. Czy organizujecie imprezy prywatne?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
            Tak, oferujemy organizację imprez na wyłączność. W celu uzyskania szczegółowych informacji prosimy o kontakt.
            </p>
          </div>
          <hr className="line"/>
        </div>
      </div>
    </div>
    <MyComponent />
    </>
  )
}


export default Contact