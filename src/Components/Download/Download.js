import React from 'react';
import './Download.module.css';
import NavTop from '../NavTop/NavTop';
import NavBottom from '../NavBottom/NavBottom';
import { Link } from 'react-router-dom';

export default function Download(){
  return (
  <>
    <NavTop/>
    <h2>Download</h2>
    <h1>MUTUAL FUND FORMS</h1>
    <div className="container">
      <div className="row">
        <div className="col">
        <li><Link className='nav-link' to="#">NSE-IIN-FORM</Link></li>
        <li><Link className="nav-link" to="#">NSE OTM Debit Mandate Form</Link></li>
        <li><Link className="nav-link" to="#">SIP/ STP/ SWP Cancellation Form</Link></li>
        <li><Link className="nav-link" to="#">Common Transaction Form</Link></li>
        <li><Link className="nav-link" to="#">SBI Common Application Form</Link></li>
        <li><Link className="nav-link" to="#">Change of Bank Transaction</Link><br/></li>

        <h5>FATCA Forms download (Offline)</h5><br/>
        <li><Link className="nav-link" to="#">CAMS Form (Individuals)</Link></li>
        <li><Link className="nav-link" to="#">CAMS Form (Non-Individuals)</Link></li>
        <li><Link className="nav-link" to="#">Karvy Form (Individuals)</Link></li>
        <li><Link className="nav-link" to="#">Karvy Form (Non-Individuals)</Link></li>
        <li><Link className="nav-link" to="#">Franklin Form (Individuals)</Link></li>
        <li><Link className="nav-link" to="#">Franklin Form (Non-Individuals)</Link></li>
        <li><Link className="nav-link" to="#">NSE Form (Individuals)</Link></li>
        <li><Link className="nav-link" to="#">NSE Form (Non-Individuals)</Link><br/><br/></li>
        </div>

    <div className="col">
      <h5>Check your KYC Status(Online)</h5><br/>
      <li><Link className="nav-link" to="#">CVL KRA</Link></li>
      <li><Link className="nav-link" to="#">CAMS KRA</Link></li>
      <li><Link className="nav-link" to="#">NDSL KRA</Link></li>
      <li><Link className="nav-link" to="#">NSE KRA</Link></li><br/>
      <li><h5>Check CKYC Status(Online)</h5></li><br/>
      <li><Link className="nav-link" to="#">Karvy KRA</Link></li><br/>
      <li><h5>FATCA Service(Online)</h5></li><br/>
      <li><Link className="nav-link" to="#">Karvy fintech(kfintech)</Link></li>
      <li><Link className="nav-link" to="#">CAMS</Link></li>      
    </div>
    <div className="col">
      <li><h6>Download CKYC Forms(Offline)</h6></li><br/>
      <li><Link className="nav-link" to="#">CKYC Individual Form</Link></li>
      <li><Link className="nav-link" to="#">KYC Individual Change Form</Link></li>
      <li><Link className="nav-link" to="#">Supplementary CKYC Form [For upgrade from KYC to CKYC]</Link></li>
      <li><Link className="nav-link" to="#">KYC Non Individual Form</Link></li>
      <li><Link className="nav-link" to="#">KYC Non-Individual Change Form</Link></li>
      <li><Link className="nav-link" to="#">KYC Non Individual-Annexure</Link></li>
    </div>
    </div>
    </div>

    <h5>View of the investor’s holdings across all Mutual Funds serviced by all the RTAs.</h5><br/><br/>
    <p>Mutual Fund investors consolidated account statement CAS – CAMS+Karvy Fintech+Franklin Templeton</p><br/><br/>
    <NavBottom/>
  </>
  );
}