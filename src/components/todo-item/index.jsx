import React from 'react';
import style from './style.module.css'
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'

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
          <DeleteIcon onClick={onDelete}
          size='medium'
          />
       </li>
   );
};

export default TodoItem;