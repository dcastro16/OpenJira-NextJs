import { createContext } from "react";

export interface ContextProps {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;

  //Methods
  openSidebar: () => void;
  closeSidebar: () => void;
  setIsAddingEntry: (value: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
