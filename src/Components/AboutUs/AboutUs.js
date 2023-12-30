import React from 'react';
import './AboutUs.module.css';
import circle from './circle.png';
import steps from './steps.png';
import NavTop from '../NavTop/NavTop';
import NavBottom from '../NavBottom/NavBottom';

const AboutUs = () => {
  return (
  <>
  <NavTop/>
    <div className="nav-link">
      About Us
      <h1>About Us</h1>
      <h5>WHO WE ARE / WHY CHOOSE US</h5>

      <h3>Our Aim & Objective:</h3>
      <p>Providing ethical and value-based advice being our strength, our objective is to balance between one’s <br />
        rational and irrational aspects of money.</p>

      <img src={circle} alt='circle'/>
      <h3>Our Strength & Mission:</h3>
      <p>We believe in the process, not in the product, and pursue goal-based planning instead of advising <br />randomly.

        As human beings, we all have money related memories, feelings and dreams .<br />

        Our strength is to understand these facets and prepare a financial road map accordingly.</p>
 
      <img src={steps} alt='steps' />
      <h3>Our Process:</h3>
      <p>We adopt a Listen-Plan-Build strategy, in which we <br /> 
        first listen to your journey & your approach towards <br /> 
        money – your beliefs, responsibilities, dreams, fears<br /> 
        & help you understand and prioritize your financial<br /> life.

        Following this, we analyze your Cash flows, Risk<br /> 
        appetite, Return expectations and Aspirations,<br />
        and accordingly build your financial pyramid with five<br /> 
        strong foundations:

        A financial plan slowly gives you clarity with respect<br /> 
        to knowing what you should and shouldn’t do.<br />

        It helps to develop an easy step-by-step approach towards your Investments to work in harmony towards your goals.</p>    
    </div>
  <NavBottom/>
  </>
  );
};

export default AboutUs;
