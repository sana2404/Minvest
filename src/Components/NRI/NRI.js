import React from 'react';
import './NRI.module.css';
import NavTop from '../NavTop/NavTop';
import NavBottom from '../NavBottom/NavBottom';

export default function NRI (){
  return (
  <>
    <NavTop/>
    <div className="nav-link">NRI</div>;
    <ul>
      <li>Why Invest in India</li>
      <li>NRE/NRO Accounts</li>
      <li>Open an NRI Account</li>
    </ul>
    <NavBottom/>
  </>
  );
}
