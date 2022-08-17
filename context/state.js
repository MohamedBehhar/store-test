import { createContext, useContext, useState, useRef, useEffect} from 'react';

const DataContext = createContext({});

export const DataProvider = ({children}) => {
  const [openNav, setOpenNav] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  return (
    <DataContext.Provider value={{
      openNav,
      setOpenNav,
      showProducts,
      setShowProducts
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;
