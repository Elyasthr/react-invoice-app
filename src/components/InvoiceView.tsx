import { Invoice } from "../interfaces/InvoiceInterface";

const InvoiceView = ({invoice}: {invoice: Invoice}) => {

  return (
    <>
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
          <p className="body-1">{invoice.senderAddress.street}</p>
          <p className="body-1">{invoice.senderAddress.city}</p>
          <p className="body-1">{invoice.senderAddress.postCode}</p>
          <p className="body-1">{invoice.senderAddress.country}</p>
        </div>

        <div>
          <div>
            <div>
              <p className="body-1">Invoice Date</p>
              <h3>{invoice.createdAt}</h3>
            </div>
            <div>
              <p className="body-1">Invoice Date</p>
              <h3>{invoice.paymentDue}</h3>
            </div>
          </div>
          <div>
            <p className="body-1">Bill To</p>
            <h3>{invoice.clientName}</h3>
            <p className="body-1">{invoice.clientAddress.street}</p>
            <p className="body-1">{invoice.clientAddress.city}</p>
            <p className="body-1">{invoice.clientAddress.postCode}</p>
            <p className="body-1">{invoice.clientAddress.country}</p>
          </div>
        </div>

        <div>
          <p className="body-1">Sent to</p>
          <h3>{invoice.clientEmail}</h3>
        </div>

        <div>
          <div>
            {
              invoice.items.map((item)=>(
                <div key={item.name}>
                  <div>
                    <h3>{item.name}</h3>
                    <h4>{item.quantity} x £ {item.price}</h4>
                  </div>
                  <h3>£ {item.total}</h3>
                </div>
              ))
            }
          </div>
          <div>
            <p className="body-1">Grand Total</p>
            <h1>£ {invoice.total}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceView;