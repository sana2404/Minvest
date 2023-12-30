import React from 'react';
import './NRI.module.css';
import NavTop from '../NavTop/NavTop';
import NavBottom from '../NavBottom/NavBottom';

export default function NRI (){
  return (
  <>
    <NavTop/>
    <div className="nav-link">NRI</div>;
    <NavBottom/>
  </>
  );
}
