
import { NavLink } from "react-router-dom";
import { Invoice } from "../interfaces/InvoiceInterface";

const InvoiceCard = ({invoice}: {invoice: Invoice}) => {
  
  return (
    <>
      <NavLink end to='view' style={{ color: 'inherit', textDecoration: 'inherit'}} state={{invoice}}>
        <li className="invoicecard-container">
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
      </NavLink>   
    </>
  );
};

export default InvoiceCard;