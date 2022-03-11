import axios from "axios";
import { useEffect, useState } from "react";
import InvoiceCard from "./InvoiceCard";
import InvoiceEmpty from "./InvoiceEmpty";
import { Invoice } from "../interfaces/InvoiceInterface";


const Invoices = () => {
  const [invoiceData,setInvoiceData] = useState<Invoice[]>();
  const [isPlayed,setIsplayed] = useState(false);

  useEffect(()=>{
    window.scrollTo(0, 0);
    
    if(!isPlayed){
      axios
        .get('http://localhost:3002/invoices')
        .then((res)=>{
          console.log(res.data)
          setInvoiceData(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
      setIsplayed(true)
    } 
  },[isPlayed])
  

  return (
    <>
      <div className="invoice-container">
        <div>
          <h1 className="invoice">Invoices</h1>
          {
            invoiceData 
              ? <p className="body-1">{invoiceData.length} Invoices</p>
              : <p className="body-1">No Invoices</p>
          }
          
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

      { 
        invoiceData
          ? <ul>
              {
                invoiceData.map((invoice) => ( 
                    <InvoiceCard  invoice={invoice} key={invoice.clientName}/>
                 ))
              }
            </ul>
          : <InvoiceEmpty />
      }
      
    </>
  );
};

export default Invoices;