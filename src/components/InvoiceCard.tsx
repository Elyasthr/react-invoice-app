import { Invoice } from "../interfaces/InvoiceInterface";

const InvoiceCard = ({invoice}: {invoice: Invoice}) => {
  return (
    <li>{invoice.id}</li>
  );
};

export default InvoiceCard;