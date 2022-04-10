import { Stack,Autocomplete,TextField } from "@mui/material";
import { useState } from "react";

const states =[ "anchrgo","juneau","fairbanks","college","sitka","ketchaiken","kenai","leaks","kodiak","bethel",
"waselyl","dougles","teneiya"]


export const CityComplete = (props) =>{
    return(
        <Stack spacing={2} width='250px'>
        <Autocomplete 
         sx={{ width: 300 }}
        options={states}
        
        renderInput={(params) => <TextField {...params} label=""/>}
        size="small"
        onChange= {(event:any ,newValue:string | null) => props.onChange(newValue)} 
        freeSolo
        />
        </Stack>
    )
}