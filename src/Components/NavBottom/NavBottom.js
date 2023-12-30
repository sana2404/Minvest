import React from "react";
import styles from './NavBottom.module.css';
import mail from './mail.jpeg';
import phone from './phone.png';
import { Link } from "react-router-dom";

export default function  NavBottom(){
    return(
    <>    
        <div className="row">
            <h2>Navigate</h2>
            <br/>
        <div className="col">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">MINVEST HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">ABOUT US</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs">CONTACT US</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">PRIVACY POLICY</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">TERMS & CONDITIONS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Download">DOWNLOAD</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FinancialPlanning">FINANCIAL PLANNING</Link>
            </li>
        </ul>
        </div>
        <div className="col">
            <nav className="bottom">
              <ul><img src={mail} alt='mail' className={styles.imgs}/>investwithmitesh@gmail.com</ul>
              <ul><img src={phone} alt='phone' className={styles.imgs}/>+91 9176453132</ul>
            </nav>
        </div>
        </div>
        <img src='logo.png' alt='Minvest Logo' /><br/>
        © Copyright 2020 - 2023 | M INVEST | All Rights Reserved
    </>
    );
};