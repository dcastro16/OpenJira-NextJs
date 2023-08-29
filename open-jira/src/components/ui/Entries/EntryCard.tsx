import { FC } from "react";
import { Entry } from "@/interfaces";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "8px 16px",
          }}
        >
          <Typography variant="body2">Hace 30 min</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
