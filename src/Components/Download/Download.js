import React from 'react';
import styles from './Download.module.css';
import NavTop from '../NavTop/NavTop';
import NavBottom from '../NavBottom/NavBottom';
import { Link } from 'react-router-dom';

export default function Download(){
  return (
  <>
    <NavTop/>
    <h2 className={styles.dh}><center>Download</center></h2>
    <h1 className={styles.dhead}><center>MUTUAL FUND FORMS</center></h1><br/>
    <div className="cont" style={{marginLeft: '2%'}}>
      <div className="row">
        <div className="col">
        <Link className='nav-link' to="#"><li>NSE-IIN-FORM</li></Link>
        <Link className="nav-link" to="#"><li>NSE OTM Debit Mandate Form</li></Link>
        <Link className="nav-link" to="#"><li>SIP/ STP/ SWP Cancellation Form</li></Link>
        <Link className="nav-link" to="#"><li>Common Transaction Form</li></Link>
        <Link className="nav-link" to="#"><li>SBI Common Application Form</li></Link>
        <Link className="nav-link" to="#"><li>Change of Bank Transaction</li></Link><br/>

        <h5>FATCA Forms download (Offline)</h5><br/>
        <Link className="nav-link" to="#"><li>CAMS Form (Individuals)</li></Link>
        <Link className="nav-link" to="#"><li>CAMS Form (Non-Individuals)</li></Link>
        <Link className="nav-link" to="#"><li>Karvy Form (Individuals)</li></Link>
        <Link className="nav-link" to="#"><li>Karvy Form (Non-Individuals)</li></Link>
        <Link className="nav-link" to="#"><li>Franklin Form (Individuals)</li></Link>
        <Link className="nav-link" to="#"><li>Franklin Form (Non-Individuals)</li></Link>
        <Link className="nav-link" to="#"><li>NSE Form (Individuals)</li></Link>
        <Link className="nav-link" to="#"><li>NSE Form (Non-Individuals)</li></Link><br/><br/>
        </div>

    <div className="col">
      <h5>Check your KYC Status(Online)</h5><br/>
      <Link className="nav-link" to="#"><li>CVL KRA</li></Link>
      <Link className="nav-link" to="#"><li>CAMS KRA</li></Link>
      <Link className="nav-link" to="#"><li>NDSL KRA</li></Link>
      <Link className="nav-link" to="#"><li>NSE KRA</li></Link><br/>
      <h5>Check CKYC Status(Online)</h5><br/>
      <Link className="nav-link" to="#"><li>Karvy KRA</li></Link><br/>
      <h5>FATCA Service(Online)</h5><br/>
      <Link className="nav-link" to="#"><li>Karvy fintech(kfintech)</li></Link>
      <Link className="nav-link" to="#"><li>CAMS</li></Link>
    </div>
    <div className="col">
      <h6>Download CKYC Forms(Offline)</h6><br/>
      <Link className="nav-link" to="#"><li>CKYC Individual Form</li></Link>
      <Link className="nav-link" to="#"><li>KYC Individual Change Form</li></Link>
      <Link className="nav-link" to="#"><li>Supplementary CKYC Form [For upgrade from KYC to CKYC]</li></Link>
      <Link className="nav-link" to="#"><li>KYC Non Individual Form</li></Link>
      <Link className="nav-link" to="#"><li>KYC Non-Individual Change Form</li></Link>
      <Link className="nav-link" to="#"><li>KYC Non Individual-Annexure</li></Link>
    </div>
    </div>
    </div>
    <h5 style={{marginLeft: '2%'}}>View of the investor’s holdings across all Mutual Funds serviced by all the RTAs.</h5><br/><br/>
    <li style={{marginLeft: '4%'}}>Mutual Fund investors consolidated account statement CAS – CAMS+Karvy Fintech+Franklin Templeton</li><br/><br/>
    <NavBottom/>
  </>
  );
}