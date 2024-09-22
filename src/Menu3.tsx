import PizzaImg from "./PizzaImg"
function Menu3() {
    return <section className="center-container">
      <PizzaImg></PizzaImg>
    <div className="menu-items-box">
      <div className="menu-items-title">
        <h2>Antipasti | Przystawki</h2>
        <hr/>
      </div>
      <div className="menu-items">
        <div className="menu-items-column">
          <div className="menu-item">
            <div className="menu-item-text">
              <h3 className="menu-item-name">Foccacia</h3>
              <p className="menu-item-description">1. oliwa czosnkowa, oregano, rozmaryn<br/>2. riccotta i pesto z pistacji</p>
              <h4 className="menu-item-price">1. 21zł<br/>2. 24zł</h4>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-text">
              <h3 className="menu-item-name">Brushetta</h3>
              <p className="menu-item-description">1.standart: pomidorki, świeża bazylia, pieprz młotkowany</p>
              <h4 className="menu-item-price">28zł</h4>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-text">
              <h3 className="menu-item-name">Deska wędlin</h3>
              <p className="menu-item-description">Mortadella z pistacjami, szynka parmeńska, salami spinata piccante, salami Napoli, mini mozzarella, oliwki, miód</p>
              <h4 className="menu-item-price">99zł</h4>
            </div>
          </div>
        </div>
        <div className="menu-items-column">
          <div className="menu-item">
            <div className="menu-item-text">
              <h3 className="menu-item-name">Prosciutto con melone</h3>
              <p className="menu-item-description">Szynka parmeńska, melon cantalouepe, sos balsamiczny, miód wielokwiatowy</p>
              <h4 className="menu-item-price">32zł</h4>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-text">
              <h3 className="menu-item-name">Prosciutto con melone</h3>
              <p className="menu-item-description">Szynka parmeńska, melon cantalouepe, sos balsamiczny, miód wielokwiatowy</p>
              <h4 className="menu-item-price">32zł</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
export default Menu3