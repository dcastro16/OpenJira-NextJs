import { FC, useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";
import { Entry, EntryStatus } from "@/interfaces";
import { EntryCard } from "..";
import { EntriesContext } from "@/context/entries";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const renderEntries = (entry: Entry) => {
    return <EntryCard key={entry._id} entry={entry} />;
  };

  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh)",
          overflowY: "auto",
          backgroundColor: "transparent",
          padding: "0.5rem",
        }}
      >
        <List sx={{ opacity: 1, padding: 0 }}>
          {entriesByStatus.map(renderEntries)}
        </List>
      </Paper>
    </div>
  );
};
