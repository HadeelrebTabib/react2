import React, { Component } from 'react';
import logo from './../../logoo.svg';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
export default class Navbar extends Component {
  render() {
  return (
<nav className={`navbar navbar-expand-lg navbar-light bg-light ${style.navbg}`}>
  <div className="container-fluid">
    <a className="navbar-brand logo" href="#">CEF <img src={logo}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
<ul className='list-unstyled d-flex'>
<li class="nav-item">
    <a class="nav-link" href="#">Home</a>
 </li>
 <li class="nav-item">
     <a className="nav-link" href="#">Sales</a>
 </li>
 <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
 </li>
</ul>
  </div>
</nav>

  )
  }
}
