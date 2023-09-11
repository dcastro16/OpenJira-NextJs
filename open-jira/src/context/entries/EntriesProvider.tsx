import { FC, ReactNode, useEffect, useReducer } from "react";
import { EntriesContext, entriesReducer } from ".";
import { Entry, EntryStatus } from "@/interfaces";

import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

interface Props {
  children: ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: EntryStatus.PENDING,
    };

    dispatch({ type: "[Entries] - AddEntry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entries] - UpdateEntry", payload: entry });
  };

  useEffect(() => {
    first
  
    
  }, [])
  t

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        // Methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
