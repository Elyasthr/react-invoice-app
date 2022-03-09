import { createContext, useContext, useState } from "react";
import Invoices from "./components/Invoices";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InvoiceView from "./components/InvoiceView";

interface IThemeContext {
  theme: string;
  toggleTheme?: (val:string) => void;
}

const defaultState = {
  theme: "light",
}
export const ThemeContext = createContext<IThemeContext>(defaultState);
const App = () => {
  const thisContext = useContext(ThemeContext);
  const [theme,setTheme] = useState(thisContext.theme);
  const toggleTheme = (val:string):void => {
      setTheme(val)
  }
  
  return (
    <ThemeContext.Provider 
      value={{
        theme,
        toggleTheme
      }}
    >
      <BrowserRouter>
        <div data-theme={theme} className="root">
          <Navbar/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Invoices/>}/>
              <Route path="/view" element={<InvoiceView />}/>
              <Route path="/*" element={<Invoices/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;