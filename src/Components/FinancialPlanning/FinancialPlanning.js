import React from 'react';
import './FinancialPlanning.module.css';
import FP from './FP.png';
import NavTop from '../NavTop/NavTop';
import NavBottom from '../NavBottom/NavBottom';

const FinancialPlanning = () => {
  return (
  <>
    <NavTop/>
      <div className="nav-link">
      <h2>Financial Planning</h2>
      WHAT ADVICE DO WE PROVIDE
      <img src={FP} alt='Financial Planning' />
      <p>
        Financial markets are prone to unpredictability and the need of an Individual and financial advice change frequently. In a developing economy at a higher inflation,<br/>
        the goal of maximizing profits is hindered by clouds of uncertainty. Minvest with its focused team of qualified professionals work closely with the clients<br/> 
        understanding financial goals and targets of an organization or an Individual. We take a modular and research driven approach to analyse, project, stimulate and<br/> 
        provide the best financial strategy. This approach of strategizing is to attain the said goal and devised in a way that keeps in mind the ever changing<br/>
        circumstances of the financial markets.<br/><br/>

        In today’s extremely dynamic world uncertainty and volatile economic conditions have made it more important than ever to have strong financial foundation that’ll<br/>
        keep your family protected and get positive financial outcomes. Our team of experts and qualified financial planners help you to develop a sound strategy to ensure<br/>
        you meet all your financial goals while safeguarding your wealth.<br/><br/>

        <b>We will help you:</b><br/><br/>

        Identify and prioitise your financial goal<br/>
        Prepare for your children’s education or marriage plans<br/>
        Fulfill and manage your retirement ambitions<br/>
        Grow your wealth<br/>
        Protect your family’s future against life’s uncertainties<br/>
        Pass on your asset to future gen<br/>
        Save taxes<br/><br/>

        <b>Who requires Financial Planning?</b><br/><br/>
        Some individuals might feel that they don’t need to plan or they know their finances better, or don’t have enough money.<br/><br/>

        However, every person whether poor or wealthy requires Financial Planning like all rich and poor require medical treatment.<br/><br/>

        <b>Why do individuals and families need to plan their finances?</b><br/><br/>
        There are no prevalent large scale social security schemes in India, so responsibility increases to plan for emergency events, health & life cover and retirement<br/> provisions.<br/><br/>

        All sources of money need to be allocated in a prudent and disciplined way towards own needs, wants and other spending requirements.<br/><br/>

        <b>What is Financial Planning and where we tend to make mistakes ?</b><br/><br/>
        When you go to a doctor, he/she diagnoses the patient to understand the problem and then prescribe the medication.<br/><br/>

        Doctor’s focus isn’t on the medicine (Cipla or Ranbaxy), the focus is on problem and overall health of the patient.<br/><br/>

        Similarly, financial planner’s role is to understand your financial strengths and threats, and accordingly suggests allocation in each asset class and its product or<br/> schemes.<br/><br/>

        Looking for products first and then trying to fit that product in your life isn’t the right approach. Looking at life first and at a later stage product must be looked at.<br/><br/>

        <b>What should be our right approach ?</b><br/><br/>
        We all do financial planning unknowingly and in a unstructured manner in isolation.<br/>

        We do fixed deposits, buy insurance policies, invest in stocks and mutual funds, buy real estate and take loans.<br/><br/>

        Any spending or investment decision that you take certainly impacts your overall financial life.<br/><br/>

        Financial Planning is considering impact of one decision on another, and utilizing resources in the best possible manner to achieve one’s financial aspirations.<br/><br/>
      </p>
    </div>
    <NavBottom/>
  </>
  )
};

export default FinancialPlanning;
