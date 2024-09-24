import zdjecielokalu from "./assets/images/zdjęcie-lokalu.png";
import teamphoto from "./assets/images/team-photo.png";

function AboutUs() {
    return <section className="center-container">
      <div className="about-title-box">
        <h1 className="about-title">Witaj w Uno momento – Gdzie Każda Pizza Ma Swoje Początki</h1>
      </div>
      <div className="about-restaurant">
        <img src={zdjecielokalu}/>
        <div className="about-restaurant-text">
          <p className="about-restaurant-p">
            Lorem ipsum dolor sit amet consectetur. Nec molestie luctus egestas pretium pellentesque nisl sollicitudin sed et. Magna gravida sed tellus posuere nibh diam adipiscing id. Maecenas amet vulputate in justo facilisis. Odio varius vitae facilisis dapibus. Etiam eu lectus consequat sit porttitor. Enim morbi nulla nisi varius. Lorem ipsum dolor sit amet consectetur. Nec molestie luctus egestas pretium pellentesque nisl sollicitudin sed et. Magna gravida sed tellus posuere nibh diam adipiscing id. Maecenas amet vulputate in justo facilisis. Odio varius vitae facilisis  
          </p>
        </div>
      </div>
      <div className="about-title-box">
        <h2 className="about-team-title">POZNAJ ZESPÓŁ, KTÓRY TWORZY MAGIĘ NA TALERZU</h2>
      </div>
      <div className="about-team">
        <div className="about-restaurant-text">
          <p className="about-restaurant-p">
            Lorem ipsum dolor sit amet consectetur. Nec molestie luctus egestas pretium pellentesque nisl sollicitudin sed et. Magna gravida sed tellus posuere nibh diam adipiscing id. Maecenas amet vulputate in justo facilisis. Odio varius vitae facilisis dapibus. Etiam eu lectus consequat sit porttitor. Enim morbi nulla nisi varius. Lorem ipsum dolor sit amet consectetur. Nec molestie luctus egestas pretium pellentesque nisl sollicitudin sed et. Magna gravida sed tellus posuere nibh diam adipiscing id. Maecenas amet vulputate in justo facilisis. Odio varius vitae facilisis  
          </p>
        </div>
        <img src={teamphoto}/>
      </div>
      <div className="about-team2">
      <img src="src/assets/images/team-photo.png"/>
        <div className="about-restaurant-text">
          <p className="about-restaurant-p">
            Lorem ipsum dolor sit amet consectetur. Nec molestie luctus egestas pretium pellentesque nisl sollicitudin sed et. Magna gravida sed tellus posuere nibh diam adipiscing id. Maecenas amet vulputate in justo facilisis. Odio varius vitae facilisis dapibus. Etiam eu lectus consequat sit porttitor. Enim morbi nulla nisi varius. Lorem ipsum dolor sit amet consectetur. Nec molestie luctus egestas pretium pellentesque nisl sollicitudin sed et. Magna gravida sed tellus posuere nibh diam adipiscing id. Maecenas amet vulputate in justo facilisis. Odio varius vitae facilisis  
          </p>
        </div>
        
      </div>
    </section>
}

export default AboutUs