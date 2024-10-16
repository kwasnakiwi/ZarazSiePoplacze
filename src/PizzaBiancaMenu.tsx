
import { Link } from "react-router-dom"
function PizzaBiancaMenu() {
    return (
      <section className="menu-container center-container">
        <div className="menu-top">
        <h1 className="menu-title">Uno Momento Menu:</h1>
        <div className="menu-nav-btns">
          <Link to='/menu/przystawki' className="menu-btn">PRZYSTAWKI I SAŁATKI</Link>
          <Link to='/menu/pizzarossa' className="menu-btn">PIZZA ROSSA</Link>
          <Link to='/menu/pizzabianca' className="menu-btn" id="orange">PIZZA BIANCA</Link>
          <Link to='/menu/pizzawege' className="menu-btn">PIZZA WEGE</Link>
          <Link to='/menu/specialpizza' className="menu-btn">SPECIAL PIZZA</Link>
          <Link to='/menu/drinks' className="menu-btn">NAPOJE</Link>
        </div>
      </div>
        <div className="menu-items">
          <div className="menu-items-title-box">
            <h2 className="menu-items-title">Pizza Bianca</h2>
            <hr className="menu-items-title-line" id="menu-line1"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.1. Mortadella E Pistacchio</h3>
              <h4 className="menu-item-price">32cm - 45zł / 40cm - 56zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sos bianca, ser mozzarella, 
              po wypieku - moradella z pistacjami, pesto pistacjowe i ser buffala, kruszone pistacje
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.2. Tuna Love</h3>
              <h4 className="menu-item-price">32cm - 51zł / 40cm - 55zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sos bianca, ser mozzarella, 
              po wypieku - moradella z pistacjami, pesto pistacjowe i ser buffala, kruszone pistacje
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.3. Ala Carbonara</h3>
              <h4 className="menu-item-price">32cm - 44zł / 40cm - 52zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sos bianca, ser mozzarella, 
              boczek, cebula czerwona, puree czosnkowe, świeża bazylia, parmezan, pieprz młotkowany
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.4. Salsiccia Con Papatate</h3>
              <h4 className="menu-item-price">32cm - 46zł / 40cm - 54zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sos bianca, ser mozzarella, 
                kiełbaska salsiccia, gorgonzola, ziemniak gotowany, świeże listki mięty
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
        </div>
      </section>
    )
              
    {/*
            

              <h3 className="menu-item-name">sosy</h3>
              <p className="menu-item-description">pomidorowy łagodny | pikantny, czosnkowy, bazyliowy, sriracha, słodkie chilli, carolina reaper</p>
              <h4 className="menu-item-price">4zł</h4>


              <h3 className="menu-item-name">Orzeszkowelove</h3>
              <p className="menu-item-description">sos pomidorowy, ser mozzarella, kiełbaska salsiccia, pomidorki koktajlowe, po wypieku - orzeszki ziemne, świeża bazylia</p>
              <h4 className="menu-item-price">32cm - 44zł / 40cm - 52zł</h4>
*/}


}

export default PizzaBiancaMenu