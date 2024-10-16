import { Link } from "react-router-dom"
function PizzaWegeMenu() {
    return (
      <section className="menu-container center-container">
        <div className="menu-top">
        <h1 className="menu-title">Uno Momento Menu:</h1>
        <div className="menu-nav-btns">
          <Link to='/menu/przystawki' className="menu-btn">PRZYSTAWKI I SAŁATKI</Link>
          <Link to='/menu/pizzarossa' className="menu-btn">PIZZA ROSSA</Link>
          <Link to='/menu/pizzabianca' className="menu-btn">PIZZA BIANCA</Link>
          <Link to='/menu/pizzawege' className="menu-btn" id="orange">PIZZA WEGE</Link>
          <Link to='/menu/specialpizza' className="menu-btn">SPECIAL PIZZA</Link>
          <Link to='/menu/drinks' className="menu-btn">NAPOJE</Link>
        </div>
      </div>
        <div className="menu-items">
          <div className="menu-items-title-box">
            <h2 className="menu-items-title">Pizza Wege</h2>
            <hr className="menu-items-title-line" id="menu-line1"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.1. Orzech i Grucha</h3>
              <h4 className="menu-item-price">32cm - 47zł / 40cm - 55zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sos bianca, ser mozzarella, 
              ser feta, gruszka karmelizowana, orzechy włoskie, rukola
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.2. Los Bakłażanos</h3>
              <h4 className="menu-item-price">32cm - 43zł / 40cm - 51zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sos pomidorowy, ser mozzarella, 
                    pieczony bakłażan, pieczona papryka, ser ricotta, oliwa czosnkowa
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
        </div>
      </section>
    )
}

export default PizzaWegeMenu