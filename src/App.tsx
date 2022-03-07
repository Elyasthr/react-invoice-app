import { createContext, useContext, useState } from "react";
import Invoices from "./components/Invoices";
import Navbar from "./components/Navbar";

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
      <div data-theme={theme} className="root">
        <Navbar/>
        <div className="container">
          <Invoices/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;