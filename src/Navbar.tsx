import pizzalogo from'./assets/images/pizza-logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <nav>
      <div className="navbar">
        <ul className="navbar-list">
            <li className="navbar-line"><Link to="/pizs"><img src={pizzalogo} alt="logo"/></Link></li>
            <li className="navbar-line"><Link to="/menu1">MENU</Link></li>
            <li className="navbar-line"><Link to="/about_us">O NAS</Link></li>
            <li className="navbar-line"><Link to='/contact'>KONTAKT</Link></li>
            <li className="navbar-line"><h3 className="under-nav">tel. 577 886 999<br/>
            uno.momentodg@gmail.com</h3></li>
        </ul>

        </div>
        <div className="navbar2">
          <ul className='navbar2-list'>
            <li className='navbar2-line'><Link to="/"><img src={pizzalogo}/></Link></li>
            <li className='navbar2-line hideOnMobile'><Link to="/menu1">MENU</Link></li>
            <li className='navbar2-line hideOnMobile'><Link to="/about_us">O NAS</Link></li>
            <li className='navbar2-line hideOnMobile'><Link to ="/contact">KONTAKT</Link></li>
            <li className='navbar2-line hideOnMobile'><a><h3 className='navbar2-h3'>tel. 577 886 999<br/>
            uno.momentodg@gmail.com</h3></a></li>
            <li className='navbar2-line showOnMobile'><a style={{cursor: 'pointer'}} onClick={function showNavbar(): void {
  const navbar3 = document.querySelector('.navbar3') as HTMLElement;
  if (navbar3) {
    navbar3.style.display = 'block';
    navbar3.style.scrollBehavior = 'smooth';
  }
}
}><svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
</a></li>
          </ul>
        </div>
        <div className="navbar3">
        <a className='navbar3-x' style={{cursor: 'pointer'}} onClick={function hideNavbar(): void {
  const navbar3 = document.querySelector('.navbar3') as HTMLElement;
  if (navbar3) {
    navbar3.style.display = 'none';
  }
}
}><svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
  <ul className='navbar3-list'>
    <li className='navbar3-line'><Link to="/"><img src={pizzalogo} alt="logo"/></Link></li>
    <li className='navbar3-line'><Link to="/menu1">MENU</Link></li>
    <li className='navbar3-line'><Link to="/about_us">O NAS</Link></li>
    <li className='navbar3-line'><Link to="/contact">KONTAKT</Link></li>
  </ul>
  <div className='under-nav3'>
    <h3 className='navbar3-h3'>tel. 577 886 999</h3>
    <h3 className='navbar3-h3'>uno.momentodg@gmail.com</h3>
  </div>
</div>
    </nav>
)
}

export default Navbar