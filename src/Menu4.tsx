import PizzaImg from "./PizzaImg"
function Menu4() {
    return <section className="center-container">
<PizzaImg></PizzaImg>
    <div className="menu-items-box">
      <div className="menu-items-title">
        <h2>Insalata | Sałatki</h2>
        <hr className="menu-line"/>
      </div>
      <div className="menu-items">
        <div className="menu-items-column">
          <div className="menu-item">
            <div className="menu-item-text">
              <h3 className="menu-item-name">Proste Uno</h3>
              <p className="menu-item-description">mix sałat, szynka parmeńska, grillowany ser halloumi, oliwki zielone, pomidorki koktajlowe, starty parmezan, oliwa z oliwek</p>
                <h4 className="menu-item-price">43zł</h4>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-text">
              <h3 className="menu-item-name">Lazurowy Melon</h3>
              <p className="menu-item-description">roszponka, ser lazur, melon, szynka parmeńska, awokado, granat, oliwa z oliwek</p>
                <h4 className="menu-item-price">40zł</h4>
            </div>
          </div>
        </div>
        <div className="menu-items-column">
          <div className="menu-item">
            <div className="menu-item-text">
              <h3 className="menu-item-name">Tuńczykowe Love</h3>
              <p className="menu-item-description">tuńczyk w kawałkach, papryka czerwona, kukurydza, ogórek konserwowy, mix sałat, musztarda, sczypiorek, oliwa z oliwek</p>
                <h4 className="menu-item-price">43zł</h4>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-text">
              <h3 className="menu-item-name">Mini Mozzarella</h3>
              <p className="menu-item-description">mix sałat, pomidorki koktajlowe, czarne oliwki, mini mozzarella, słonecznik łuskany, pomidory suszone, oliwa z oliwek</p>
                <h4 className="menu-item-price">39zł</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Menu4