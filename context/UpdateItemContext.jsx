import { createContext, useState } from "react";

export const UpdateItemContext = createContext();

export function UpdateItemProvider({ children }) {
  const [product, setProduct] = useState({});
  return (
    <UpdateItemContext.Provider value={{ product, setProduct }}>
      {children}
    </UpdateItemContext.Provider>
  );
}
