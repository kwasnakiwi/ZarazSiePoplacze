import pizzalogo from'./assets/images/pizza-logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <nav>
      <div className="navbar">
        <ul className="navbar-list">
            <li className="navbar-line"><Link to="/"><img src={pizzalogo} alt="logo"/></Link></li>
            <li className="navbar-line"><Link to="/menu1">MENU</Link></li>
            <li className="navbar-line"><Link to="/about_us">O NAS</Link></li>
            <li className="navbar-line"><a>KONTAKT</a></li>
            <li className="navbar-line"><h3 className="under-nav">tel.421 325 326<br/>
            spas@xd.com</h3></li>
        </ul>

        </div>
        <div className="navbar2">
          <ul className='navbar2-list'>
            <li className='navbar2-line'><a><img src={pizzalogo}/></a></li>
            <li className='navbar2-line hideOnMobile'><a>MENU</a></li>
            <li className='navbar2-line hideOnMobile'><a>O NAS</a></li>
            <li className='navbar2-line hideOnMobile'><a>KONTAKT</a></li>
            <li className='navbar2-line hideOnMobile'><a><h3 className='navbar2-h3'>tel.421 325 326<br/>
            spas@xd.com</h3></a></li>
            <li className='navbar2-line'><a onClick={function showNavbar(): void {
  const navbar3 = document.querySelector('.navbar3') as HTMLElement;
  if (navbar3) {
    navbar3.style.display = 'flex';
  }
}
}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
</a></li>
          </ul>
        </div>
        <div className="navbar3">
        <a className='navbar3-x' onClick={function hideNavbar(): void {
  const navbar3 = document.querySelector('.navbar3') as HTMLElement;
  if (navbar3) {
    navbar3.style.display = 'none';
  }
}
}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
</div>
    </nav>
)
}

export default Navbar