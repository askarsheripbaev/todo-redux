import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodoActionCreator} from "../../redux/todo/actions";
import Input from "../../components/input";
import ButtonTeg from "../../components/button";
import {Box, Container} from "@mui/material";

const AddTodoContainer = () => {
   const [inputValue, setInputValue] = useState('')

   const dispatch = useDispatch()

   const handleInputChange = (e) => {
      setInputValue(e.target.value)
   }

   const handleInput = (e) => {
      e.preventDefault()
   }

   const handleAddTodo = () => {
      if (inputValue.trim() !== '') {
         dispatch(addTodoActionCreator(inputValue))
         setInputValue('')
      }

   }
   return (
       <div>
          <Box
              component='form'
              onSubmit={handleInput}
              sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          >
          <Input
          value={inputValue}
          onChange={handleInputChange}
          />
          <ButtonTeg onClick={handleAddTodo}>Add todo</ButtonTeg>
          </Box>
       </div>
   );
};

export default AddTodoContainer;