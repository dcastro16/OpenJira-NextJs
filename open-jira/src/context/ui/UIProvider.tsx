import { FC, ReactNode, useReducer } from "react";
import { UIContext, uiReducer } from ".";

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

interface Props {
  children: ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSidebar = () => {
    dispatch({ type: "[UI] - OpenSidebar" });
  };

  const closeSidebar = () => {
    dispatch({ type: "[UI] - CloseSidebar" });
  };

  const setIsAddingEntry = (value: boolean) => {
    dispatch({ type: "[UI] - SetIsAddingEntry", payload: value });
  };

  const setIsDraggingEntry = (value: boolean) => {
    dispatch({ type: "[UI] - SetIsDraggingEntry", payload: value });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,

        //Methods
        openSidebar,
        closeSidebar,
        setIsAddingEntry,
        setIsDraggingEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
