import React from 'react';
import './Learning.module.css';
import NavTop from '../NavTop/NavTop';
import NavBottom from '../NavBottom/NavBottom';

const Learning = () => {
  return (
  <>
    <NavTop/>
    <div className="nav-link">Learning</div>;
    <ul>
      <li>Mutual Fund Industry</li>
      <li>Equity</li>
      <li>Market Regulator</li>
    </ul>
    <NavBottom/>
  </>
  );  
};

export default Learning;
