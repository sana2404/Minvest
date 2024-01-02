import React from 'react';
import styles from './ContactUs.module.css';
import NavTop from '../NavTop/NavTop';
import NavBottom from '../NavBottom/NavBottom';
import Form from './Form';
import p1 from './p1.png';

export default function ContactUs() {
  return (
  <>
    <NavTop/>
    <div className="nav-link">
    <h2 className={styles.chead}><center><b>Contact Us</b></center></h2>  
    <h6 className={styles.chead1}><center>GET IN TOUCH WITH US TODAY</center></h6>
    </div>
    <h2 className={styles.fhead}><b>Send Us A Message</b></h2><br/>
    <div className={styles.formImageContainer}>
      <Form/>
      <br /><br /><br /><br /><br /><br /><br />
      <img src={p1} alt='contact-person-logo' className={styles.contactimg}/>
    </div>
    <br /><br /><br /><br /><br />
    <NavBottom/>
  </>
  );
}