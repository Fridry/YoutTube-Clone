import React, { useState } from "react";

import { Paper, TextField } from "@material-ui/core";

const SearchBar = ({ onFormSubmit }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(search);
  };

  return (
    <Paper elevation={4} style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </Paper>
  );
};

export default SearchBar;
