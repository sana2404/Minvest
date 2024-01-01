import React from "react";
import './NavTop.module.css';
import { Link } from 'react-router-dom';

export default function NavTop(){
    return(    
      <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img src='logo.png' alt='Minvest Logo' style={{color: "black"}}/><br/><br/><br/><br/><br/>
        AMFI Registered
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <br /><br /><br /><br/><br/><br /><br /><br /><br/><br/>
              <Link className="nav-link active" aria-current="page" to="/"  style={{color: "white" , marginLeft: '70px'}}>HOME</Link>
            </li>
            <li className="nav-item">
            <br /><br /><br /><br/><br/><br /><br /><br /><br/><br/>
              <Link className="nav-link" to="/AboutUs"  style={{color: "white", width: '80px'}}>ABOUT US</Link>
            </li>
            <li className="nav-item">
            <br /><br /><br /><br/><br/><br /><br /><br /><br/><br/>
              <Link className="nav-link" to="/FinancialPlanning"  style={{color: "white", width: '150px'}}>FINANCIAL PLANNING</Link>
            </li>
            <li className="nav-item dropdown">
            <br /><br /><br /><br/><br/><br /><br /><br /><br/><br/>
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
            <br /><br /><br /><br/><br/><br /><br /><br /><br/><br/>
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
            <br /><br /><br /><br/><br/><br /><br /><br /><br/><br/>
              <Link className="nav-link" to="/Download" style={{color: "white"}}>DOWNLOAD</Link>
            </li>
            <li className="nav-item">
            <br /><br /><br /><br/><br/><br /><br /><br /><br/><br/>
              <Link className="nav-link" to="/ContactUs" style={{color: "white", width: '100px'}}>CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>
      <button type="submit">Client Login</button>
    </nav>
    );
}