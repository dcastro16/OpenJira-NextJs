import { createContext } from "react";

export interface ContextProps {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;

  //Methods
  openSidebar: () => void;
  closeSidebar: () => void;
  setIsAddingEntry: (value: boolean) => void;
  setIsDraggingEntry: (value: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
