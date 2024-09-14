import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const Dropdown = ({
  label,
  id,
  value,
  handleChange,
  name,
  options,
  ...props
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={value}
        onChange={handleChange}
        name={name}
        {...props} // Spread any additional props if needed
      >
        {
        options.map((option) => (
          <MenuItem value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
