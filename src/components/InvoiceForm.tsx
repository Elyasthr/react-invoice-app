import { useLocation } from "react-router";
import { NavLink } from "react-router-dom"
import { Invoice } from "../interfaces/InvoiceInterface";

const InvoiceForm = () => {
  const location = useLocation();
  const myInvoice = location.state as {invoice: Invoice | null};
  const invoice = myInvoice ? myInvoice.invoice : myInvoice;

  return (
    <>
      <div className="invoice-view-container">
        {
          invoice 
            ? <>
                <NavLink end to="/view" state={{invoice}}>
                  <button className="btn-pers"><span>&lt;</span>Go back</button>
                </NavLink>
                <h1>Edit #{invoice.id}</h1>
              </>
            : <>
                <NavLink end to="/">
                  <button className="btn-pers"><span>&lt;</span>Go back</button>
                </NavLink>
                <h1>New Invoice</h1>
              </>
        }
        
        <h1>Le Formulaire</h1>
      </div>

      {
        invoice 
          ? <div className="btn-container-2">
              <button className="btn-edit">Cancel</button>
              <button className="btn-paid">Save Change</button>
            </div>
          : <div className="btn-container-2">
              <button className="btn-edit">Discord</button>
              <button className="btn-edit">Save as Draft</button>
              <button className="btn-paid">Save &amp; Send</button>
            </div>
      }
      
    </>
  );
};

export default InvoiceForm;