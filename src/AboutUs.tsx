import zdjecielokalu from "./assets/images/Zdjęcie (6).png";


function AboutUs() {
    return <section className="center-container">
      <div className="about-title-box">
        <h1 className="about-title">Witaj w Pizzerii Uno Momento – Twoje miejsce na prawdziwą, kulinarną ucztę!</h1>
      </div>
      <div className="about-restaurant">
        <img src={zdjecielokalu}/>
        <div className="about-restaurant-text">
          <p className="about-restaurant-p">
          Nasza pizza powstaje według tradycyjnej włoskiej receptury, z wykorzystaniem metody zimnej fermentacji i minimalnej ilości drożdży. Ciasto leżakuje co najmniej 24 godziny, co sprawia, że pizza zyskuje wyjątkową lekkość i bogaty smak.
<br/><br/>
W naszej pizzerii sięgamy po najwyższej jakości składniki, starannie dobierając proporcje, aby w pełni wydobyć ich aromat. Przygotowanie pizzy to sztuka, dlatego każde ciasto rozciągamy ręcznie, a każda pizza jest jedyna w swoim rodzaju. Nie musi być idealnie okrągła – najważniejsze, że w każdy kawałek wkładamy tę samą pasję i zaangażowanie.
          </p>
        </div>
      </div>
      <div className="about-title-box">
        <h2 className="about-team-title">POZNAJ ZESPÓŁ, KTÓRY TWORZY MAGIĘ NA TALERZU</h2>
      </div>
      <div className="about-team">
        <div className="about-restaurant-text">
          <p className="about-restaurant-p">
          Nasz zespół to grupa prawdziwych pasjonatów włoskiej kuchni, dla których każde danie to małe dzieło sztuki. Przygotowujemy nie tylko wyśmienite pizze, ale także świeże sałatki i pyszne przystawki, dbając o to, by każdy składnik był najwyższej jakości. Od kucharzy, którzy z troską i precyzją komponują każde danie, po obsługę, która serwuje je z uśmiechem – wszyscy jesteśmy tu po to, by zapewnić Ci niezapomniane kulinarne doświadczenia.
          </p>
        </div>
      </div>
      <div className="about-team2">
        <div className="about-restaurant-text">
          <p className="about-restaurant-p">
            Nasz zespół to grupa prawdziwych pasjonatów włoskiej kuchni, dla których każde danie to małe dzieło sztuki. Przygotowujemy nie tylko wyśmienite pizze, ale także świeże sałatki i pyszne przystawki, dbając o to, by każdy składnik był najwyższej jakości. Od kucharzy, którzy z troską i precyzją komponują każde danie, po obsługę, która serwuje je z uśmiechem – wszyscy jesteśmy tu po to, by zapewnić Ci niezapomniane kulinarne doświadczenia.
          </p>
        </div>
        
      </div>
    </section>
}

export default AboutUs