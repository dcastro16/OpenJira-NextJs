import { UIState } from ".";

type UIReducerAction =
  | { type: "[UI] - OpenSidebar" }
  | { type: "[UI] - CloseSidebar" }
  | { type: "[UI] - SetIsAddingEntry"; payload: boolean }
  | { type: "[UI] - SetIsDraggingEntry"; payload: boolean };

export const uiReducer = (state: UIState, action: UIReducerAction): UIState => {
  switch (action.type) {
    case "[UI] - OpenSidebar":
      return {
        ...state,
        sideMenuOpen: true,
      };

    case "[UI] - CloseSidebar":
      return {
        ...state,
        sideMenuOpen: false,
      };

    case "[UI] - SetIsAddingEntry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };

    case "[UI] - SetIsDraggingEntry":
      return {
        ...state,
        isDragging: action.payload,
      };

    default:
      return state;
  }
};
