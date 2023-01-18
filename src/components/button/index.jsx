import React from 'react';
import {Button, Container} from "@mui/material";

const ButtonTeg = (props) => {
   const {
      onClick,
       children
   } = props
   return (
       <div>
          <Container sx={{display: 'flex'}}>
          <Button
              size="small"
              variant="contained"
              type='submit'
              onClick={onClick}>

             {children}
          </Button>
          </Container>
       </div>
   );
};

export default ButtonTeg;