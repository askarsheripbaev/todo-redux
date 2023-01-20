import React from 'react';
import style from './style.module.css'
import {Button} from "@mui/material";

function DeleteIcon() {
   return null;
}

const TodoItem = (props) => {
   const {
      text,
       onClick,
       onDelete,
       isComplete
   } = props
   return (

       <li className={style} onClick={onClick}
       style={{
          textDecoration: isComplete ? 'line-through' : 'none'
       }}
       >
          {text}
          <Button onClick={onDelete} variant="outlined" startIcon={<DeleteIcon />}>
             Delete
          </Button>
       </li>
   );
};

export default TodoItem;