function Navbar() {
    return <div className="navbar">
        <nav>
        <ul className="navbar-list">
            <li className="navbar-line"><a href="/"><img src="/src/assets/images/pizza-logo.png" alt="logo"/></a></li>
            <li className="navbar-line"><a href="/menu1">MENU</a></li>
            <li className="navbar-line"><a href="/about_us">O NAS</a></li>
            <li className="navbar-line"><a>KONTAKT</a></li>
        </ul>
        <h3 className="under-nav">tel.421 325 326<br/>
         spas@xd.com</h3>
    </nav>
  </div>
}

export default Navbar