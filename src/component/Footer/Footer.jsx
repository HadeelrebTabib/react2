import React, { Component } from 'react'
import style from './Footer.module.css';
export default class Footer extends Component {
  render() {
    return (
<footer className={`py-5  ${style.footer}`}>
    <div className="row list-unstyled d-flex justify-content-between  ">
  
        <li className="col-3  mb-2"><a href="#" className="nav-link p-0 text-muted">customer services</a></li>
        <li className="col-3  mb-2"><a href="#" className="nav-link p-0 text-muted">company info</a></li>
        <li className="col-3 mb-2"><a href="#" className="nav-link p-0 text-muted">erms and conditions</a></li>
        <li className="col-3  mb-2"><a href="#" className="nav-link p-0 text-muted">services</a></li>
    </div>

  <div className="text-center">

    <p>CEF© 2022 </p>
  </div>
</footer>

    )
  }
}
