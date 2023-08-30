import { FC, useContext, useMemo, DragEvent } from "react";
import { List, Paper } from "@mui/material";
import { Entry, EntryStatus } from "@/interfaces";
import { EntryCard } from "..";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";

import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);

  const { isDragging, setIsDraggingEntry } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const renderEntries = (entry: Entry) => {
    return <EntryCard key={entry._id} entry={entry} />;
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");

    const entry = entries.find((entry) => entry._id === id);

    if (!entry) return;

    entry.status = status;
    updateEntry(entry);
    setIsDraggingEntry(false);
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      onDragOver={allowDrop}
      onDrop={onDropEntry}
      className={isDragging ? styles["list--dragging"] : styles["list"]}
    >
      <Paper
        sx={{
          height: "calc(100vh - 170px) ",
          overflowY: "auto",
          backgroundColor: "transparent",
          padding: "0.5rem",
        }}
      >
        <List
          sx={{
            opacity: isDragging ? 0.2 : 1,
            transition: "all .3s",
            padding: 0,
          }}
        >
          {entriesByStatus.map(renderEntries)}
        </List>
      </Paper>
    </div>
  );
};
