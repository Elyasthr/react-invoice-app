import { useState } from "react";
import { Invoice } from "../interfaces/InvoiceInterface";
import InvoiceView from "./InvoiceView";

const InvoiceCard = ({invoice}: {invoice: Invoice}) => {
  const [viewInvoice,setViewInvoice] = useState(false);
  
  return (
    <>
      <li className="invoicecard-container" onClick={()=>{setViewInvoice(true)}}>
        <div className="card-header">
          <h4>#<span className="span-id">{invoice.id}</span></h4>
          <p className="body-1">{invoice.clientName}</p>
        </div>
        <div className="card-body">
          <div>
            <p className="body-1 date">Due {invoice.paymentDue}</p> 
            <h3>£ {invoice.total}</h3>
          </div>
          <div>
            <h4 className={'status ' + invoice.status}><div className={"status-point " + invoice.status + "-point"}></div>{invoice.status}</h4>
          </div>  
        </div>  
      </li>
      
      {
        viewInvoice && 
          (
            <div className="invoice-view-container">
              <button onClick={()=>{setViewInvoice(false)}}>back</button>
              <InvoiceView invoice={invoice} />
            </div>  
          )
      }
    </>
  );
};

export default InvoiceCard;