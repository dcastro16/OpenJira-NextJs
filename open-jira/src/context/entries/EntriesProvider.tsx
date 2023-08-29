import { FC, ReactNode, useReducer } from "react";
import { EntriesContext, entriesReducer } from ".";
import { Entry, EntryStatus } from "@/interfaces";

import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "hola mundo",
      status: EntryStatus.PENDING,
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "hola chavales",
      status: EntryStatus.IN_PROGRESS,
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "hola y adios",
      status: EntryStatus.COMPLETED,
      createdAt: Date.now() - 100000,
    },
  ],
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

    dispatch({type : '[Entries] - AddEntry', payload: newEntry})
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        // Methods
        addNewEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
