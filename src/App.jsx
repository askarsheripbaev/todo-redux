import React from "react";
import './App.css';
import {useSelector} from "react-redux";
import {getTodos} from "./redux/todo/selectors";
import AddTodoContainer from "./containers/add-todo";
import TodoListContainer from "./containers/todo-list";
import FilterButtons from "./containers/filter-buttons";
import {Container} from "@mui/material";

function App() {
   const todos = useSelector(getTodos)
  return (
    <div>
       <Container sx={{textAlign: 'center'}}>
        <AddTodoContainer></AddTodoContainer>
       <TodoListContainer></TodoListContainer>
          <FilterButtons></FilterButtons>

       </Container>
    </div>
  );
}

export default App;
