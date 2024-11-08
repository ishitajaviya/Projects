// Created By ND
import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

// custom style
import custTFStyles from "./styles";

function CustTextField(props: any) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props?.onChange) {
      props.onChange(event);
    }
  };

  return (
    <>
      <TextField
        // {...props}
        id={props.id}
        margin={props.margin}
        fullWidth={props.fullWidth}
        placeholder={props.placeholder}
        type={props.type}
        size={props.size}
        value={props.value}
        onBlur={props.onBlur}
        onFocus={props?.onFocus}
        error={props.error}
        helperText={props.helperText}
        inputProps={props.inputProps}
        InputProps={props.InputProps}
        inputRef={props.inputRef}
        className={props.className}
        disabled={props?.disabled}
        multiline={props?.multiline}
        minRows={props?.minRows}
        rows={props?.rows}
        autoFocus={
          props?.autoFocus && props?.autoFocus !== undefined ? true : false
        }
        sx={{
          ...(typeof props?.isMob !== "undefined" && props?.isMob === true
            ? custTFStyles.fieldMobInput
            : custTFStyles.fieldInput),
            ...props?.sx
        }}
        required={
          typeof props.required !== "undefined" ? props.required : false
        }
        onChange={handleChange}
        autoComplete={props?.autoComplete}
        variant={props?.variant ?? "outlined"}
      />
    </>
  );
}
export default CustTextField;
