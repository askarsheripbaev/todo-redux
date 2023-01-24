import React, {useEffect} from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import postOperation from "./redux/post/thunk";
import Switch from "react-router-dom/es/Switch";
import Login from "./pages/login";
import Password from "./pages/register";
import Route from "react-router-dom/es/Route";
import {Link} from "react-router-dom";
import HomePage from "./pages/home";

function App() {
   const posts = useSelector(state => state.posts.list)
   const post = useSelector(state => state.posts.data)
   const update = useSelector(state => state.posts)
   const create = useSelector(state => state.posts.data)
   const deleteStatus = useSelector(state => state.posts)

   const dispatch = useDispatch()
   const {fetchPosts, fetchPostById, updatePost, createPost, deletePost} = postOperation

   useEffect(() => {
      dispatch(postOperation.fetchPosts())
      // dispatch(postOperation.fetchPostById(8))
      // dispatch(postOperation.updatePost(5))
      // dispatch(postOperation.createPost())
      // dispatch(postOperation.deletePost(8))

   }, [])
   console.log(posts)
   // console.log(post, 'ID')
   // console.log(update, 'UPDATE')
   // console.log(create, 'CREATE')
   // console.log(deleteStatus, 'Delete')

   return (
       <div className={'background'}>
          <div className={'link'}>
             <Link label='Home' to='/'> Home </Link>
             <Link label='login' to='/login'>Login</Link>
             <Link label='reg' to='/password'>Password</Link>
          </div>
          <Switch>
             <Route exact path='/' component={HomePage}>
             </Route>
             <Route exact path='/login' component={Login}>
             </Route>
             <Route exact path='/password' component={Password}>
             </Route>
          </Switch>


       </div>
   );
}

export default App;
