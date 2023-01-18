import React from 'react';
import {useDispatch} from "react-redux";
import {filterTodoActionCreator} from "../../redux/filter/actions";
import {TYPE_OF_FILTER} from "../../redux/filter/reducers";
import {Button} from "@mui/material";

const FilterButtons = () => {
   const dispatch = useDispatch()
   return (
       <div>
          <Button onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_ALL))}>
             Show all
          </Button>
          <Button onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_ACTIVE))}>
             Show Active
          </Button>
          <Button onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_COMPLETED))}>
             Show Completed
          </Button>
       </div>
   );
};

export default FilterButtons;