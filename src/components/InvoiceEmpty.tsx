const InvoiceEmpty = () => {
  return (
    <div className="invoiceEmpty-container">
        <img src="./assets/illustration-empty.svg" alt="illustration empty"/>
        <h2>There is nothing here</h2>
        <p className="body-1">Create an invoice by clicking the <span>New</span> button and get started</p>
    </div>
  );
};

export default InvoiceEmpty;