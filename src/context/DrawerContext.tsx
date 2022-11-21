import { useContext, createContext } from "react";

const DrawerContext = createContext<any>({});

export function DrawerProvider({ children, value }:any) {
  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
}

export function useDrawerValue() {
  return useContext(DrawerContext);
}