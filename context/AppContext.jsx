import { createContext, useMemo } from "react";
import useStorage from "../hooks/useStorage";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { storeItem, getItems, deleteItem, getItem, updateItem } = useStorage();

  return (
    <AppContext.Provider
      value={{ storeItem, getItems, deleteItem, getItem, updateItem }}
    >
      {children}
    </AppContext.Provider>
  );
};
