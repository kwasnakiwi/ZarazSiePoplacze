import PizzaImg from "./PizzaImg"

function Menu1() {
    return <section className="menu-container">
      <PizzaImg/>
    <div className="menu-items-box">
      <div className="menu-items-title">
        <h2>Nowości oraz Rabaty</h2>
        <hr className="menu-line"/>
      </div>
      <div className="menu-items">
        <div className="menu-items-column">
          <div className="menu-item">

            <div className="menu-item-text">
              <h3 className="menu-item-name">Pink Pizza</h3>
              <p className="menu-item-description">wyjątkowa pizza na różowym cieście, bogato obłożona świeżymi składnikami i unikalnym sosem truskawkowym – spróbuj już dziś!</p>
              <h4 className="menu-item-price">32cm - 31zł <br /> 40cm - 37zł</h4>
            </div>
          </div>
          <div className="menu-item">

            <div className="menu-item-text">
              <h3 className="menu-item-name">Pink Pizza</h3>
              <p className="menu-item-description">wyjątkowa pizza na różowym cieście, bogato obłożona świeżymi składnikami i unikalnym sosem truskawkowym – spróbuj już dziś!</p>
              <h4 className="menu-item-price">32cm - 31zł <br /> 40cm - 37zł</h4>
            </div>
          </div>
        </div>
        <div className="menu-items-column">
          <div className="menu-item">

            <div className="menu-item-text">
              <h3 className="menu-item-name">3 W cenie 2</h3>
              <p className="menu-item-description">Z przyjemnością informujemy, że 
                od 01.08 do 14.08 mamy super promocję na pyszne.pl
                Kup dwie duże pizze a małą Margherite dostaniesz gratis</p>
              <h4 className="menu-item-price">32cm - 31zł <br /> 40cm - 37zł</h4>
            </div>
          </div>
          <div className="menu-item">

            <div className="menu-item-text">
              <h3 className="menu-item-name">3 W cenie 2</h3>
              <p className="menu-item-description">Z przyjemnością informujemy, że 
                od 01.08 do 14.08 mamy super promocję na pyszne.pl
                Kup dwie duże pizze a małą Margherite dostaniesz gratis</p>
              <h4 className="menu-item-price">32cm - 31zł <br /> 40cm - 37zł</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

}

export default Menu1