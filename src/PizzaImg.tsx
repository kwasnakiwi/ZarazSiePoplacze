import przystawki from './assets/images/aloalo1.png' ;
import salads from './assets/images/aloalo2.png';
import pizza from './assets/images/aloalo3.png';
import drinks from './assets/images/aloalo4.png';
import { useNavigate } from 'react-router-dom';
function PizzaImg() {
    const navigate = useNavigate();

    return <div className="pizza-menu">
     <div className='pizza-menu-up'>
          <div className="przystawki-box">
               <map name="image-map">
                    <area target="" style={{cursor: 'pointer'}} alt="przystawki-menu" title="przystawki-menu" onClick={() => navigate('/menu3')} coords="304,347,10,179,98,72,152,41,227,17,294,18" shape="poly"/>
               </map>
               <img src={przystawki} useMap="#image-map"/>
          </div>
          <div className="salads-box">
               <map name="image-map2">
                    <area target="" style={{cursor: 'pointer'}} alt="salads-menu" title="salads-menu" onClick={() => navigate('/menu4')} coords="42,342,328,176,284,109,226,57,151,21,49,4" shape="poly"/>
               </map>
               <img src={salads} useMap='#image-map2'/>
          </div>
     </div>
     <div className="pizza-menu-down">
          <div className="pizza-box">
               <img src={pizza} useMap='#image-map3'/>
               <map name="image-map3">
                    <area target="" style={{cursor: 'pointer'}} alt="pizza-menu" title="pizza-menu" onClick={() => navigate('/menu2')} coords="49,330,345,170,60,2,17,75,4,183,20,263" shape="poly"/>
               </map>
          </div>
          <div className="drinks-box">
               <img src={drinks} useMap='#image-map4'/>
               <map name="image-map4">
                    <area target="" style={{cursor: 'pointer'}} alt="drinks-menu" title="drinks-menu" onClick={() => navigate('/menu5')} coords="286,341,5,178,298,13,327,77,342,149,335,236,318,291" shape="poly"/>
               </map>
          </div>
     </div>
     

          
          

     
    <h2 className="pizza-text pizza-text1">PIZZE</h2>
    <h2 className="pizza-text pizza-text2">PRZYSTAWKI</h2>
    <h2 className="pizza-text pizza-text3">SAŁATKI</h2>
    <h2 className="pizza-text pizza-text4">NAPOJE</h2>
    <div className='menu-transporter'>
          <a style={{cursor: 'pointer'}} onClick={() => navigate('/menu1')}><h1 className="UnoMomentoMenu">Uno Momento<br/>Menu</h1></a>
     </div>
 </div>
}

export default PizzaImg