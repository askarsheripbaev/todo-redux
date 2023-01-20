import React, {useEffect} from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import AddTodoContainer from "./containers/add-todo";
import TodoListContainer from "./containers/todo-list";
import FilterButtons from "./containers/filter-buttons";
import {Container} from "@mui/material";
import postOperation from "./redux/post/thunk";
import FormModule from "./containers/form";

function App() {
   const posts = useSelector(state => state.posts.list)
   const post = useSelector(state => state.posts.data)
   const update = useSelector(state => state.posts)
   const create = useSelector(state => state.posts)

   const dispatch = useDispatch()
   const {fetchPosts, fetchPostById, updatePost, createPost} =  postOperation

   useEffect(() => {
      // dispatch(postOperation.fetchPosts())
      // dispatch(postOperation.fetchPostById(8))
      // dispatch(postOperation.updatePost(5))
      dispatch(postOperation.createPost(10))

   }, [])
   // console.log(posts)
   // console.log(post)
   // console.log(update, 'UPDATE')
   console.log(create, 'CREATE')

  return (
    <div>
       <Container
           sx={{textAlign: 'center'}}
       >
        <AddTodoContainer />
       <TodoListContainer />
          <FilterButtons />
          <FormModule />
       </Container>
    </div>
  );
}

export default App;
