import React from 'react';
import styles from './Home.module.css';
import person from './person.png';
import piggy from './piggy.png';
import portfolio from './portfolio.png';
import slant from './slant-separator.png';
import NavTop from '../NavTop/NavTop';
import NavBottom from '../NavBottom/NavBottom';

const Home = () => {
  return (
    <>
      <NavTop/>
      <div className='container1'>
        <h1><b>Get Your Money Working For You</b></h1>
        <h6 className={styles.hhome}>WHERE & HOW TO INVEST / START ON YOUR PATH TO WEALTH</h6>
        <p className={styles.phome}>Specializing in smart investment and frugal financial planning and advice to give you the best<br />
          possible outcomes both short term and long term throughout economic downturn.</p>
      </div>

      <div className= {styles.container1} >
        <div className="row">
          <div className="col">
            <h3>Best Mutual Funds</h3><br/>
            <img src={slant} alt='slant separator' className={styles.imgStyle}/><br/>
            <br/>Identify the best Mutual Funds<br />for your financial goals.
          </div>
          <div className="col">
            <h3>Invest</h3><br/>
            <img src={slant} alt='slant separator' className={styles.imgStyle}/><br/>
            <br/>Now invest 24*7 in the mutual fund schemes of<br /> your choice without any hassles. 
          </div>
          <div className="col">
            <h3>Track</h3><br/>
            <img src={slant} alt='slant separator' className={styles.imgStyle}/><br/>
            <br/>Track your investments online on a real time<br /> basis.
          </div>
        </div>
      </div>

      <div className= {styles.container2} >
        <h3><center>Do more with MINVEST</center></h3><br/>
        <center><img src={slant} alt='slant separator' className={styles.imgStyle}/></center><br/>
        <div className="row">
          <div className="col">      
          <center><img src={piggy} alt='piggy bank'/></center>
            <h3>Invest in Mutual Funds</h3>
            <br/>Transact in existing Folio and Create new folios<br /> using seamless integration. 
          </div>
          <div className="col">
            <center><img src={person} alt='person'/></center>      
            <h3>Everything in one place</h3>
            <br/>Group investor into Family accounts. Clients have<br /> access to everything they need.
          </div>
          <div className="col">
            <center><img src={portfolio} alt='Portfolio Reporting'/></center>
            <h3>Portfolio Reporting</h3>
            <br/>View Family portfolio and Capital Gain. XIRR and<br /> CAGR report. Present a complete Portfolio for you<br /> with a single click.
          </div>
        </div>
      </div>
      
      <div className={styles.container3}>
        <center>
        <h3>Areas of Expertise</h3>
        <img src={slant} alt='slant separator' className={styles.imgStyle}/><br/>
        <br/>We at MINVEST, help people invest in good mutual fund schemes. Our clients comprises people from distinct walks of<br/>
         life – be it Individual Investors, Corporates, NRIs or HNIs.<br/>
        </center>
      </div>
      
      <div className={styles.container4}>
        <div className={styles.row1}>
          <br /><br />
          <center>
          <div className="col1">
            <h5>Solution That Suit Your Needs</h5>
            <br/>At MINVEST, our core aim is to serve our clients<br/>
              with dedication and integrity, meet their<br/>
              expectations and build enduring relationship.
          </div>
          </center>
        </div>
        <div className={styles.row2}>
          <br /><br />
        <center>
          <div className="col2">
            <h5>When We Grow, We Grow <br/><center>Together</center></h5>
            <br/>Our revenue and success are determined by our<br/>
              investor’s success. This philosophy is rarely<br/>
              found with traditional agents.
          </div>
        </center>
        </div>
        <div className={styles.row3}>
          <br/><br/>
          <center>
          <div className="col3">
            <h5>Mutual Funds</h5>
            <br/>Empanelled with all the Asset Management<br/>
              Companies, our R&D division is always on the<br/>
              hook to provide innovative ways for better<br/>
              investment results.<br/>
          </div>
          </center>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <center><button1 type='submit'>CONTACT US TODAY</button1></center>
      <br /><br /><br /><br /><br />
    <NavBottom/>
    </>
  );
}

export default Home;