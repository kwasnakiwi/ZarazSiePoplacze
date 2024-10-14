
import { Link } from "react-router-dom"
function SpecialPizzaMenu() {
  return(
    <section className="menu-container center-container">
      <div className="menu-top">
        <h1 className="menu-title">Uno Momento Menu:</h1>
        <div className="menu-nav-btns">
          <Link to='/menu/przystawki' className="menu-btn">PRZYSTAWKI</Link>
          <Link to='/menu/pizzarossa' className="menu-btn">PIZZA ROSSA</Link>
          <Link to='/menu/pizzabianca' className="menu-btn">PIZZA BIANCA</Link>
          <Link to='/menu/pizzawege' className="menu-btn">PIZZA WEGE</Link>
          <Link to='/menu/specialpizza' className="menu-btn" id="orange">SPECIAL PIZZA</Link>
          <Link to='/menu/drinks' className="menu-btn">NAPOJE</Link>
        </div>
      </div>
      <div className="menu-items">
        <div className="menu-items-title-box">
          <h2 className="menu-items-title">Special Pizza</h2>
          <hr className="menu-items-title-line" id="menu-line1"/>
        </div>
        <div className="menu-item">
          <div className="menu-item-top">
            <h3 className="menu-item-name">NO.1. Salsiccia Con Papatate</h3>
            <h4 className="menu-item-price">32cm - 44zł</h4>
          </div>
          <div className="menu-item-bottom">
            <p className="menu-item-desc">
            sos pomidorowy, ser mozzarella, salami spinata piccante, oliwki zielone, cebula czerwona, nachosy serowe
            </p>
          </div>
          <hr className="menu-item-line"/>
        </div>
        <div className="menu-item">
          <div className="menu-item-top">
            <h3 className="menu-item-name">NO.2. Salsiccia Speciale</h3>
            <h4 className="menu-item-price">32cm - 45zł</h4>
          </div>
          <div className="menu-item-bottom">
            <p className="menu-item-desc">
            sos pomidorowy, ser mozzarella, kiełbaska salsiccia, cukinia, po wypieku - pomidory suszone w oleju
            </p>
          </div>
          <hr className="menu-item-line"/>
        </div>
        <div className="menu-item">
          <div className="menu-item-top">
            <h3 className="menu-item-name">NO.3. Burratinka</h3>
            <h4 className="menu-item-price">32cm - 46zł</h4>
          </div>
          <div className="menu-item-bottom">
            <p className="menu-item-desc">
            sos pomidorowy, bazylia, pomidorki pelati, burrata, pesto bazyliowe, oliwa z oliwek
            </p>
          </div>
          <hr className="menu-item-line"/>
        </div>
        <div className="menu-item">
          <div className="menu-item-top">
            <h3 className="menu-item-name">NO.4. Jestę Burakiem</h3>
            <h4 className="menu-item-price">32cm - 45zł</h4>
          </div>
          <div className="menu-item-bottom">
            <p className="menu-item-desc">
            sos bianco, ser mozzarella, gorgonzola, burak gotowany, rukola, słonecznik prażony, sos balsamiczny
            </p>
          </div>
          <hr className="menu-item-line"/>
        </div>
        <div className="menu-item">
          <div className="menu-item-top">
            <h3 className="menu-item-name">NO.5. Wiejka Przygoda</h3>
            <h4 className="menu-item-price">32cm - 47zł</h4>
          </div>
          <div className="menu-item-bottom">
            <p className="menu-item-desc">
            sos pomidorowy, ser mozzarella, kiełbasa wędzona, boczek, ogórek kiszony, jajko, szczypiorek
            </p>
          </div>
          <hr className="menu-item-line"/>
        </div>
        <div className="menu-item">
          <div className="menu-item-top">
            <h3 className="menu-item-name">NO.6. Orzeszkowelove</h3>
            <h4 className="menu-item-price">32cm - 44zł / 40cm - 52zł</h4>
          </div>
          <div className="menu-item-bottom">
            <p className="menu-item-desc">
            sos pomidorowy, ser mozzarella, kiełbaska salsiccia, pomidorki koktajlowe, po wypieku - orzeszki ziemne, świeża bazylia
            </p>
          </div>
          <hr className="menu-item-line"/>
        </div>
        <div className="menu-item">
          <div className="menu-item-top">
            <h3 className="menu-item-name">NO.7. Sosy</h3>
            <h4 className="menu-item-price">4zł</h4>
          </div>
          <div className="menu-item-bottom">
            <p className="menu-item-desc">
            pomidorowy łagodny | pikantny, czosnkowy, bazyliowy, sriracha, słodkie chilli, carolina reaper
            </p>
          </div>
          <hr className="menu-item-line"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialPizzaMenu