import { Link } from "react-router-dom";

function DrinksMenu() {
    return(
      <section className="menu-container center-container">
        <div className="menu-top">
        <h1 className="menu-title">Uno Momento Menu:</h1>
        <div className="menu-nav-btns">
          <Link to='/menu/przystawki' className="menu-btn">PRZYSTAWKI I SAŁATKI</Link>
          <Link to='/menu/pizzarossa' className="menu-btn">PIZZA ROSSA</Link>
          <Link to='/menu/pizzabianca' className="menu-btn">PIZZA BIANCA</Link>
          <Link to='/menu/pizzawege' className="menu-btn">PIZZA WEGE</Link>
          <Link to='/menu/specialpizza' className="menu-btn">SPECIAL PIZZA</Link>
          <Link to='/menu/drinks' className="menu-btn" id="orange">NAPOJE</Link>
        </div>
      </div>
        <div className="menu-items">
          <div className="menu-items-title-box">
            <h2 className="menu-items-title">Herbata i kawa</h2>
            <hr className="menu-items-title-line" id="menu-line1"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.1. Herbata sir Williams</h3>
              <h4 className="menu-item-price">12zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.2. Rozgrzewająca herbata</h3>
              <h4 className="menu-item-price">22zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.3. Espresso</h3>
              <h4 className="menu-item-price">10zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.4. Kawa czarna</h3>
              <h4 className="menu-item-price">11zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.5. Americano</h3>
              <h4 className="menu-item-price">11zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.6. Kawa biała</h3>
              <h4 className="menu-item-price">12zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.7. Cappucino</h3>
              <h4 className="menu-item-price">13zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.8. Cafe latte</h3>
              <h4 className="menu-item-price">16zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.9. Karmelowa kawa mrożona</h3>
              <h4 className="menu-item-price">21zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-items-title-box">
            <h2 className="menu-items-title">Napoje</h2>
            <hr className="menu-items-title-line" id="menu-line1"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.1. Fritz</h3>
              <h4 className="menu-item-price">12zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.2. Coca-Cola | zero</h3>
              <h4 className="menu-item-price">250ml - 8zł / 500ml - 11zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.3. Fanta</h3>
              <h4 className="menu-item-price">250ml - 8zł / 500ml - 11zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.4. Sprite</h3>
              <h4 className="menu-item-price">250ml - 8zł / 500ml - 11zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.5. Fuzetea brzoskwinia z hibikusem</h3>
              <h4 className="menu-item-price">250ml - 10zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.6. Kinley z nutą owoców jagodowych i jaśminu</h3>
              <h4 className="menu-item-price">250ml - 9zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.7. Kinley tonic</h3>
              <h4 className="menu-item-price">250ml - 9zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.8. Kinley tonic ZERO z nutą kwiatów z czarnego bzu</h3>
              <h4 className="menu-item-price">250ml - 11zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.9. Sanpellegrino Arnacia Rossa (oranżada włoska)</h3>
              <h4 className="menu-item-price">330ml - 9zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.10. Sok Cappy (jabłko, pomarańcza)</h3>
              <h4 className="menu-item-price">250ml - 9zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.11. Woda Kropla Beskidu gaz | niegaz</h3>
              <h4 className="menu-item-price">330ml - 7zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.12. Woda w karafce (mięta, cytryna, pomarańcza)</h3>
              <h4 className="menu-item-price">800ml - 14zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.13. Lemoniada cytrynowa</h3>
              <h4 className="menu-item-price">400ml - 6zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-items-title-box">
            <h2 className="menu-items-title">Drinki bezalkoholowe</h2>
            <hr className="menu-items-title-line" id="menu-line1"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.1. Fizzy Berry</h3>
              <h4 className="menu-item-price">19zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              grenanida, kinley pink aromatic berry, świeże maliny
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.2. Weak Cubalibre</h3>
              <h4 className="menu-item-price">19zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sok ze świeżej limonki, kinley tonic, coca-cola
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.3. Fake Mohito</h3>
              <h4 className="menu-item-price">20zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              limonka, mięta, kinley tonic, syrop z cukru trzcinowego, syrop z kwiatów czarnego bzu
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.4. Almost Aperol</h3>
              <h4 className="menu-item-price">19zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sok ze świeżej limonki, kinley tonic, coca-cola
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-items-title-box">
            <h2 className="menu-items-title">Na zdrowie!</h2>
            <hr className="menu-items-title-line" id="menu-line1"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.1. Aperol Spritz</h3>
              <h4 className="menu-item-price">30zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              aperol, prosecco, woda gazowana
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.2. Limoncello Spritz</h3>
              <h4 className="menu-item-price">30zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              limoncello, prosecco, woda gazowana
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.3. Limoncello malinowe</h3>
              <h4 className="menu-item-price">32zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sok malinowy, woda gazowana, limoncello, prosecco, świeże maliny
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.4. Rossini</h3>
              <h4 className="menu-item-price">29zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              prosecco, puree truskawkowe
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.5. Mimosa</h3>
              <h4 className="menu-item-price">32zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              sok pomarańczowy, prosecco, aperol
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.6. Hugo ale nie Boss</h3>
              <h4 className="menu-item-price">28zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              syrop z czarnego bzu, prosecco, woda gazowana, mięta, limonka
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.7. Sicilian Sunset</h3>
              <h4 className="menu-item-price">30zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              wino białe półwytrawne, sok pomarańczowy, sok żurawinowy
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.8. Very Cherry</h3>
              <h4 className="menu-item-price">40ml - 18zł / 100ml - 36zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              craftowa nalewka wiśniowa
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.9. Grejpfrutowa Mimoza</h3>
              <h4 className="menu-item-price">32zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              prosecco, sok grejpfrutowy, aperol, świeży grejpfrut
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.10. Pink Peroni</h3>
              <h4 className="menu-item-price">32zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              peroni, grenanida, sok pomarańczowy, świeża pomarańcza
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.11. Jesienny Aperol</h3>
              <h4 className="menu-item-price">35zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              aperol, cydr jabłkowy, prosecco, podawane z kulą lodową z zamrożonym anyżem, cynamonem i jabłkiem
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.12. Very Cherry Spritz</h3>
              <h4 className="menu-item-price">36zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              wiśniówka very cherry, prosecco, aperol spritz, woda gazowana
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.13. Sweet Cherry</h3>
              <h4 className="menu-item-price">35zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              wiśniówka very cherry, sok z cytryny, kinley tonic
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-items-title-box">
            <h2 className="menu-items-title">Piwo</h2>
            <hr className="menu-items-title-line" id="menu-line1"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.1. Heinekeen lany</h3>
              <h4 className="menu-item-price">330ml - 13zł / 500ml - 15zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.2. Żywiec butelka</h3>
              <h4 className="menu-item-price">500ml - 16zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.3. Żywiec biały butelka</h3>
              <h4 className="menu-item-price">500ml - 16zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.4. Żywiec 0%</h3>
              <h4 className="menu-item-price">500ml - 15zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.5. Żywiec biały 0%</h3>
              <h4 className="menu-item-price">500ml - 15zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.6. Żywiec 0% (malina z nutą trawy cytrynowej, cytryna z nutą coli)</h3>
              <h4 className="menu-item-price">500ml - 15zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.7. Sok do piwa</h3>
              <h4 className="menu-item-price">1zł do małego piwa / 2zł do dużego piwa</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-items-title-box">
            <h2 className="menu-items-title">Wino</h2>
            <hr className="menu-items-title-line" id="menu-line1"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.1. Wino stołowe białe</h3>
              <h4 className="menu-item-price">Kieliszek - 13zł / Karafka - 30zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.2. Wino stołowe czerwone</h3>
              <h4 className="menu-item-price">Kieliszek - 15zł / Karafka - 37zł</h4>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-items-title-box">
            <h2 className="menu-items-title">Wino na butelki</h2>
            <hr className="menu-items-title-line" id="menu-line1"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.1. Castel Pietra Pinot Grigo</h3>
              <h4 className="menu-item-price">50zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              wino białe wytrawne <b>(Włochy, Trydent)</b>
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.2. Valmarone Soave</h3>
              <h4 className="menu-item-price">40zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              wino białe wytrawne <b>(Włochy, Vento)</b>
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.3. Il Capolavoro Appassimento</h3>
              <h4 className="menu-item-price">55zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              wino białe półsłodkie <b>(Włochy, Puglia)</b>
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.4. Maestro Sangiovese Primitivo</h3>
              <h4 className="menu-item-price">65zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              wino czerwone wytrawne <b>(Włochy, Apulia)</b>
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <h3 className="menu-item-name">NO.5. Il Capolavoro Primitivo</h3>
              <h4 className="menu-item-price">55zł</h4>
            </div>
            <div className="menu-item-bottom">
              <p className="menu-item-desc">
              wino czerwone wytrawne <b>(Włochy, Apulia)</b>
              </p>
            </div>
            <hr className="menu-item-line"/>
          </div>
        </div>
      </section>
    )
}
export default DrinksMenu
