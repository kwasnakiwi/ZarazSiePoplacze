import pizzza from "src/assets/images/pizzza.png" ;
import { useNavigate } from 'react-router-dom';
function PizzaImg() {
    const navigate = useNavigate();

    return <div className="pizza-menu">
    <img src={pizzza} useMap="#image-map"/>
    <map name="image-map">
         <area style={{cursor: 'pointer'}} target="" alt="pizza-menu" title="pizza-menu" onClick={() => navigate('/menu2')} coords="43,615,370,441,40,267,30,448,32,489" shape="poly"/>
         <area style={{cursor: 'pointer'}} target="" alt="przystawki-menu" title="przystawki-menu" onClick={() => navigate('/menu3')} coords="370,93,258,103,176,147,87,243,375,418" shape="poly"/>
         <area style={{cursor: 'pointer'}} target="" alt="salads-menu" title="salads-menu" onClick={() => navigate('/menu4')} coords="408,86,502,106,586,145,682,249,399,421" shape="poly"/>
         <area style={{cursor: 'pointer'}} target="" alt="drinks-menu" title="drinks-menu" onClick={() => navigate('/menu5')} coords="693,276,734,389,734,483,690,599,407,438" shape="poly"/>
    </map>
    <h2 className="pizza-text pizza-text1">PIZZE</h2>
    <h2 className="pizza-text pizza-text2">PRZYSTAWKI</h2>
    <h2 className="pizza-text pizza-text3">SAŁATKI</h2>
    <h2 className="pizza-text pizza-text4">NAPOJE</h2>
    <a href="/menu1"><h1 className="UnoMomentoMenu">Uno Momento<br/>Menu</h1></a>
 </div>
}

export default PizzaImg