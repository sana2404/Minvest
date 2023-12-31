import React from 'react';
import styles from './AboutUs.module.css';
import circle from './circle.png';
import steps from './steps.png';
import NavTop from '../NavTop/NavTop';
import NavBottom from '../NavBottom/NavBottom';

const AboutUs = () => {
  return (
  <>
  <NavTop/>
    <div className="nav-link">
      <h1>About Us</h1>
      <h5 className={styles.ahead}><center>WHO WE ARE / WHY CHOOSE US</center></h5>
      <br /><br /><br /><br /><br />
      <img src={circle} alt='circle' className={styles.imgabout}/>
      <h3 className={styles.ahead1}>Our Aim & Objective:</h3> 
      <p className={styles.babout1}>Providing ethical and value-based advice being our strength, our objective is to balance between one’s <br />
        rational and irrational aspects of money.</p>   
      <h3 className={styles.babout}>Our Strength & Mission:</h3>
      <p className={styles.babout1}>We believe in the process, not in the product, and pursue goal-based planning instead of advising <br />randomly.<br/><br/>  

        As human beings, we all have money related memories, feelings and dreams .<br /><br/>

        Our strength is to understand these facets and prepare a financial road map accordingly.</p>


      <h3 className={styles.babout}>Our Process:</h3>
      <img src={steps} alt='steps' className={styles.imgaboutus}/>
      <p className={styles.babout1}>We adopt a Listen-Plan-Build strategy, in which we <br /> 
        first listen to your journey & your approach towards <br /> 
        money – your beliefs, responsibilities, dreams, fears<br /> 
        & help you understand and prioritize your financial<br /> life. <br/><br/>

        Following this, we analyze your Cash flows, Risk<br /> 
        appetite, Return expectations and Aspirations,<br />
        and accordingly build your financial pyramid with five<br /> 
        strong foundations:<br/><br/>

        A financial plan slowly gives you clarity with respect<br /> 
        to knowing what you should and shouldn’t do.<br /><br/>

        It helps to develop an easy step-by-step approach towards your Investments to work in harmony towards your goals.</p><br/>    
    </div>
  <NavBottom/>
  </>
  );
};

export default AboutUs;
