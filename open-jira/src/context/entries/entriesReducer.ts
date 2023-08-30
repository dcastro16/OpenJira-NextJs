import { Entry } from "@/interfaces";
import { EntriesState } from ".";

type EntriesActionType =
  | { type: "[Entries] - AddEntry"; payload: Entry }
  | { type: "[Entries] - UpdateEntry"; payload: Entry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "[Entries] - AddEntry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    case "[Entries] - UpdateEntry":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            return action.payload;
          }
          return entry;
        }),
      };

    default:
      return state;
  }
};
