import React from 'react';
import './ContactUs.module.css';
import NavTop from '../NavTop/NavTop';
import NavBottom from '../NavBottom/NavBottom';

export default function ContactUs() {
  return (
  <>
    <NavTop/>
    <div className="nav-link">Contact Us</div>;
    <NavBottom/>
  </>
  );
}
