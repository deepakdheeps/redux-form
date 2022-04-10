import { Stack,Autocomplete,TextField } from "@mui/material";
import { useState } from "react";

const states =[ "Houstan","cohehe","farm loop","salamatof","togiak","chevak","pio delta","kipnuk"]


export const DistrictComplete = (props) =>{
    const [value,setValue] = useState("");
    console.log(value);
    return (
        <Stack spacing={2} width='250px'>
        <Autocomplete 
         sx={{ width: 300 }}
        options={states}
       
        renderInput={(params) => <TextField {...params} label=""/>}
        value={value}
        size="small"
        onChange= {(event:any ,newValue:string | null) => props.onChange(newValue)} 
        freeSolo
      
        />
         
        </Stack>
    )
}