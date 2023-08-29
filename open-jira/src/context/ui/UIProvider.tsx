import { FC, ReactNode, useReducer } from "react";
import { UIContext, uiReducer } from ".";

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
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

  return (
    <UIContext.Provider
      value={{
        ...state,

        //Methods
        openSidebar,
        closeSidebar,
        setIsAddingEntry
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
