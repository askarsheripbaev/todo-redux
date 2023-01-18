import React from 'react';
import {Container, TextField} from "@mui/material";

const Input = (props) => {
   const {
      value,
       onChange,
       type = 'text'
   } = props
   return (
       <div>
          <Container sx={{display: 'flex'}}>
          <TextField
              id="standard-basic"
              label="Text"
              variant="standard"
              value = {value}
              onChange={onChange}
              type = {type}
          />
          </Container>

       </div>
   );
};

export default Input;