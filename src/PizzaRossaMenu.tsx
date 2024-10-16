import { Link } from "react-router-dom"

function PizzaRossaMenu() {
    return (
      <section className="menu-container center-container">
        <div className="menu-top">
        <h1 className="menu-title">Uno Momento Menu:</h1>
        <div className="menu-nav-btns">
          <Link to='/menu/przystawki' className="menu-btn">PRZYSTAWKI I SAŁATKI</Link>
          <Link to='/menu/pizzarossa' className="menu-btn" id="orange">PIZZA ROSSA</Link>
          <Link to='/menu/pizzabianca' className="menu-btn">PIZZA BIANCA</Link>
          <Link to='/menu/pizzawege' className="menu-btn">PIZZA WEGE</Link>
          <Link to='/menu/specialpizza' className="menu-btn">SPECIAL PIZZA</Link>
          <Link to='/menu/drinks' className="menu-btn">NAPOJE</Link>
        </div>
      </div>
      <div className="menu-items">
      <div className="menu-items-title-box">
            <h2 className="menu-items-title">Pizza Rossa</h2>
            <hr className="menu-items-title-line" id="menu-line1"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.1. Margherita</h3>
              <h4 className="menu-item-price">32cm - 31zł / 40cm - 37zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
                sos pomidorowy, ser mozzarella, świeża bazylia, parmezan oliwa extra virgin
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.2. Prosciutto Cotto</h3>
              <h4 className="menu-item-price">32cm - 40zł / 40cm - 48zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sos pomidorowy, ser mozzarella, Prosciutto Cotto, pieczarki, oliwa extra virgin
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.3. Diavola</h3>
              <h4 className="menu-item-price">32cm - 44zł / 40cm - 52złł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sos pomidorowy, ser mozzarella, salami spianata piccante, oliwki, cebula, papryczki jalapeno, oliwa extra virgin
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.4. Pancetta E Panna</h3>
              <h4 className="menu-item-price">32cm - 45zł / 40cm - 53zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sos pomidorowy, ser mozzarella, pancetta Arrotolata, Po wypieku sos bianco, świeży koperek, papryka słodka
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.5. Cztery Sery Nasze Bohatery</h3>
              <h4 className="menu-item-price">32cm - 45zł / 40cm - 53zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sos pomidorowy, ser mozzarella, gorgonzola, feta, riccota
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.6. Salame</h3>
              <h4 className="menu-item-price">32cm - 38zł / 40cm - 46zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sos pomidorowy, ser mozzarella, salami Napoli, puree czosnkowe
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.7. Parma</h3>
              <h4 className="menu-item-price">32cm - 44zł / 40cm - 52zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sos pomidorowy, ser mozzarella, szynka parmeńska, pomidorki cherry, rukola, parmezan
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.8. Hawajska Igraszka</h3>
              <h4 className="menu-item-price">32cm - 44zł / 40cm - 52zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sos pomidorowy, ser mozzarella, Prosciutto Cotto, ananas
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.9. Uno Momento</h3>
              <h4 className="menu-item-price">32cm - 45zł / 40cm - 53zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sos pomidorowy, ser mozzarella, salami Napoli, Prosciutto Cotto, pieczarki, cebula, puree czosnkowe
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.10. Ludziska! Salsiccia</h3>
              <h4 className="menu-item-price">32cm - 46zł / 40cm - 54zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sos pomidorowy, ser mozzarella, kiełbaska salsiccia, czerwona cebula, parmezan
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
        </div>
      </section>
    )
}

export default PizzaRossaMenu