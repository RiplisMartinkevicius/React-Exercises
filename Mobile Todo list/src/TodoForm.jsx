/* eslint-disable react/prop-types */
import { useState } from "react";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="create todo" edge="end" type="submit">
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}
