import InvoiceEmpty from "./InvoiceEmpty";

const Invoice = () => {
  return (
    <>
      <div className="invoice-container">
        <div>
          <h1>Invoices</h1>
          <p className="body-1">No Invoices</p>
        </div>
          
        <div className="btn-container">
          <select name="Filter" id="filter-select">
            <option value="draft">Draft</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
          </select>
          <button className="btn-invoice">
            <div className="svg-container">
              <img src="./assets/icon-plus.svg" alt="plus button"/>
            </div>
            New
          </button>
        </div>
      </div>

      <InvoiceEmpty />
      
    </>
  );
};

export default Invoice;