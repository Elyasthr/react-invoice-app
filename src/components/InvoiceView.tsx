import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Invoice } from "../interfaces/InvoiceInterface";

const InvoiceView = () => {
  const location = useLocation();
  const {invoice} = location.state as {invoice: Invoice};

  useEffect(()=>{
    window.scrollTo(0, 0);
  })

  return (
    <>
      <div className="invoice-view-container">

        <NavLink end to="/">
          <button className="btn-pers"><span>&lt;</span>Go back</button>
        </NavLink>

        <div className="status-container">
          <p className="body-1">Status</p>
          <h4 className={'status ' + invoice.status}><div className={"status-point " + invoice.status + "-point"}></div>{invoice.status}</h4>
        </div>


        <div className="invoice-body">
          <div>
            <h4>#<span className="span-id">{invoice.id}</span></h4>
            <p className="body-1">{invoice.description}</p>
          </div>

          <div>
            <p className="body-2">{invoice.senderAddress.street}</p>
            <p className="body-2">{invoice.senderAddress.city}</p>
            <p className="body-2">{invoice.senderAddress.postCode}</p>
            <p className="body-2">{invoice.senderAddress.country}</p>
          </div>

          <div className="invoice-middle">
            <div className="invoice-middle-left">
              <div>
                <p className="body-1">Invoice Date</p>
                <h3>{invoice.createdAt}</h3>
              </div>
              <div>
                <p className="body-1">Payment Due</p>
                <h3>{invoice.paymentDue}</h3>
              </div>
            </div>
            <div className="invoice-middle-right">
              <p className="body-1">Bill To</p>
              <h3>{invoice.clientName}</h3>
              <p className="body-2">{invoice.clientAddress.street}</p>
              <p className="body-2">{invoice.clientAddress.city}</p>
              <p className="body-2">{invoice.clientAddress.postCode}</p>
              <p className="body-2">{invoice.clientAddress.country}</p>
            </div>
          </div>

          <div>
            <p className="body-1">Sent to</p>
            <h3>{invoice.clientEmail}</h3>
          </div>

          <div className="invoice-body-note">
            <div className="invoice-body-note-header">
              {
                invoice.items.map((item)=>(
                  <div key={item.name} className="invoice-note-detail">
                    <div>
                      <h4>{item.name}</h4>
                      <h4>{item.quantity} x £ {item.price}</h4>
                    </div>
                    <h3>£ {item.total}</h3>
                  </div>
                ))
              }
            </div>
            <div className="invoice-body-note-footer">
              <p className="body-2">Amount Due</p>
              <h1>£ {invoice.total}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-container-2">
        <button className="btn-edit">Edit</button>
        <button className="btn-delete">Delete</button>
        <button className="btn-paid">Mark as Paid</button>
      </div>
    </>
  );
};

export default InvoiceView;