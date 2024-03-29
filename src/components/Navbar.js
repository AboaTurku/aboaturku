import React from 'react'
import { Link } from 'gatsby'
import logo from '../../static/img/textlogo21.png'
import './navbar.sass'

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
  
  <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="AboaTurku" style={{ width: '88px' }} />
        </Link>
        {/* Hamburger menu */}
        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" className="navbar-menu">
      <div className="navbar-start has-text-centered">
       {/* <Link className="navbar-item" to="/blog">
          Blog
        </Link> */}
        {/*<Link className="navbar-item" to="/about">
          About
        </Link>*/}
        <Link className="navbar-item" to="/team">
          Team
        </Link>
        <Link className="navbar-item" to="/partners">
          Partners
        </Link>
        <Link className="navbar-item" to="/projects">
          Our project
        </Link>
        {/*<Link className="navbar-item" to="/support">
          Support Us
      </Link> */}
      <Link className="navbar-item" to="/suomeksi"> 
          Suomeksi
      </Link>
      <Link className="navbar-item" to="/rekry"> 
          Aboa 2022
      </Link>
      </div>
      </div>
    </div>
  </nav>
  )}
}

export default Navbar
