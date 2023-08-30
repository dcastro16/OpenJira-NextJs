import { ChangeEvent, useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";

export const NewEntry = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSaveButton = () => {
    if (!inputValue.length) return;

    addNewEntry(inputValue);

    setIsAddingEntry(false);
    setIsTouched(false);
    setInputValue("");
  };

  return (
    <Box sx={{ marginBottom: 1 }}>
      {!isAddingEntry ? (
        <Button
          startIcon={<AddIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar tarea
        </Button>
      ) : (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva tarea"
            autoFocus
            multiline
            label={"Nueva tarea"}
            helperText={!inputValue.length && isTouched && "Ingrese un valor"}
            error={!inputValue.length && isTouched}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={() => setIsTouched(true)}
          />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Button variant="text" onClick={() => setIsAddingEntry(false)}>
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={handleSaveButton}
            >
              Guardar
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
