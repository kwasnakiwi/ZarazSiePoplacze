import { Link } from "react-router-dom"
function PrzystawkiISalatki() {
    return(
      <section className="menu-container center-container">
        <div className="menu-top">
        <h1 className="menu-title">Uno Momento Menu:</h1>
        <div className="menu-nav-btns">
          <Link to='/menu/przystawki' className="menu-btn" id="orange">PRZYSTAWKI I SAŁATKI</Link>
          <Link to='/menu/pizzarossa' className="menu-btn">PIZZA ROSSA</Link>
          <Link to='/menu/pizzabianca' className="menu-btn">PIZZA BIANCA</Link>
          <Link to='/menu/pizzawege' className="menu-btn">PIZZA WEGE</Link>
          <Link to='/menu/specialpizza' className="menu-btn">SPECIAL PIZZA</Link>
          <Link to='/menu/drinks' className="menu-btn">NAPOJE</Link>
        </div>
      </div>
        <div className="menu-items">
          <div className="menu-items-title-box">
            <h2 className="menu-items-title">Przystawki</h2>
            <hr className="menu-items-title-line" id='menu-line1'/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.1. Foccacia</h3>
              <h4 className="menu-item-price">1. 21zł / 2. 24zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              1. oliwa czosnkowa, oregano, rozmaryn<br/>2. riccotta i pesto z pistacji
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.2. Brushetta</h3>
              <h4 className="menu-item-price">28zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              1. standart: pomidorki, świeża bazylia, pieprz młotkowany
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.3. Deska wędlin</h3>
              <h4 className="menu-item-price">99zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              mortadella z pistacjami, szynka parmeńska, salami spinata piccante, salami Napoli, mini mozzarella, oliwki, miód
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.4. Prosciutto con melone</h3>
              <h4 className="menu-item-price">32zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              szynka parmeńska, melon cantalouepe, sos balsamiczny, miód wielokwiatowy
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-items-title-box">
            <h2 className="menu-items-title">Sałatki</h2>
            <hr className="menu-items-title-line" id='menu-line1'/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.1. Proste Uno</h3>
              <h4 className="menu-item-price">43zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              (mix sałat, szynka parmeńska, grillowany ser halloumi, oliwki zielone, pornidorki koktajlowe, starty parmezan, oliwa z oliwek)
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.2. Tuńczykowe love</h3>
              <h4 className="menu-item-price">43zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              (tuńczyk w kawałkach, papryka czerwona, kukurydza, ogórek konserwowy, mix sałat, musztarda, szczypiorek, oliwa z oliwek)
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.3. Lazurowy melon</h3>
              <h4 className="menu-item-price">40zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              (roszponka, ser lazur, melon, szynka parmeńska, awokado, granat, oliwa z oliwek)
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.4. Mini Mozzarella</h3>
              <h4 className="menu-item-price">39zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              (mix sałat, pomidorki koktajlowe, czarne oliwki, mini mozzarella, słonecznik łuskany, pomidory suszone, oliwa z oliwek) 
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
        </div>
      </section>
    )

              
              {/* <h3 className="menu-item-name">Foccacia</h3>
              <p className="menu-item-description">1. oliwa czosnkowa, oregano, rozmaryn<br/>2. riccotta i pesto z pistacji</p>
              <h4 className="menu-item-price">1. 21zł / 2. 24zł</h4>
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
              <p className="menu-item-description">mortadella z pistacjami, szynka parmeńska, salami spinata piccante, salami Napoli, mini mozzarella, oliwki, miód</p>
              <h4 className="menu-item-price">99zł</h4>
            </div>
          </div>
        </div>
        <div className="menu-items-column">
          <div className="menu-item">
            <div className="menu-item-text">
              <h3 className="menu-item-name">Prosciutto con melone</h3>
              <p className="menu-item-description">szynka parmeńska, melon cantalouepe, sos balsamiczny, miód wielokwiatowy</p>
              <h4 className="menu-item-price">32zł</h4>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-text">
              <h3 className="menu-item-name">Prosciutto con melone</h3>
              <p className="menu-item-description">szynka parmeńska, melon cantalouepe, sos balsamiczny, miód wielokwiatowy</p>
              <h4 className="menu-item-price">32zł</h4> */}
}
export default PrzystawkiISalatki