import React from "react";
import './NavTop.module.css';
import { Form, Link } from 'react-router-dom';

export default function NavTop(){
    return(    
      <span className="collapsed-nav-icon-open fa-bars fas">
      <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img src='logo.png' alt='Minvest Logo' />
        <p>AMFI Registered</p>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/"  style={{color: "white"}}>HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs"  style={{color: "white"}}>ABOUT US</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FinancialPlanning"  style={{color: "white"}}>FINANCIAL PLANNING</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/NRI" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white"}}>
                NRI
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Why Invest in India</Link></li>
                <li><Link className="dropdown-item" to="#">NRI Investment Process</Link></li>
                <li><Link className="dropdown-item" to="#">Open an NRI Acount</Link></li>
                <li><Link className="dropdown-item" to="#">NRE/NRO Accounts</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/Learning" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white"}}>
                LEARNING
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Mutual Fund</Link></li>
                <li><Link className="dropdown-item" to="#">Equity</Link></li>
                <li><Link className="dropdown-item" to="#">Market Regulator</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Download" style={{color: "white"}}>DOWNLOAD</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs" style={{color: "white"}}>CONTACT US</Link>
            </li>
          </ul>
          <button type="submit">Client Login</button>
        </div>
      </div>
    </nav>
    </span>
    );
}