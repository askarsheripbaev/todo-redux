import {
   getPostsRequestActionCreator,
   getPostsFailureActionCreator,
   getPostsReceiveActionCreator,
   getPostRequestActionCreator,
   getPostReceiveActionCreator,
   getPostFailureActionCreator,
   updatePostRequestActionCreator,
   updatePostReceiveActionCreator,
   updatePostFailureActionCreator,
   createPostRequestActionCreator,
   createPostReceiveActionCreator,
   createPostFailureActionCreator,
   deletePostRequestActionCreator,
   deletePostReceiveActionCreator,
   deletePostFailureActionCreator
} from "./actions";
import fetchApi from './../../API/http.js'

const fetchPosts = () => async (dispatch) => {
   dispatch(getPostsRequestActionCreator())
   try {
      const req = await fetchApi.post('/api/pets')
      // const parseData = await req.json()
      setTimeout(() => {
         dispatch(getPostsReceiveActionCreator(req.data))
      }, 2000)
   }catch (e){
      dispatch(getPostsFailureActionCreator(e))
   }
}

const fetchPostById = (id) => async (dispatch) => {
   dispatch(getPostRequestActionCreator())
   try {
      const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const parseData = await req.json()
      setTimeout(() => {
         dispatch(getPostReceiveActionCreator(parseData))
      }, 2000)
   }catch (e){
      dispatch(getPostFailureActionCreator(e))
   }
}
const updatePostMethod = {
   method: 'PUT',
   body: JSON.stringify({
      title: 'foo222',
      body: 'bar222',
   }),
   headers: {
      'Content-type': 'application/json; charset=UTF-8',
   }

}
const updatePost = (id) => async (dispatch) => {
   dispatch(updatePostRequestActionCreator())
   try {
      const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, updatePostMethod)
      const parseData = await req.json()
      setTimeout(() => {
         dispatch(updatePostReceiveActionCreator(parseData))
      }, 2000)
   }catch (e){
      dispatch(updatePostFailureActionCreator(e))
   }
}
const createPostMethod = {
   method: 'POST',
   body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
   }),
   headers: {
      'Content-type': 'application/json; charset=UTF-8',
   }

}
const createPost = () => async (dispatch) => {
   dispatch(createPostRequestActionCreator())
   try {
      const req = await fetch("https://jsonplaceholder.typicode.com/posts", createPostMethod)
      const parseData = await req.json()
      setTimeout(() => {
         dispatch(createPostReceiveActionCreator(parseData))
      }, 2000)
   }catch (e){
      dispatch(createPostFailureActionCreator(e))
   }
}

const deletePost = (id) => async (dispatch) => {
   dispatch(deletePostRequestActionCreator())
   try {
      const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'DELETE'})
      const parseData = await req.json()
      setTimeout(() => {
         dispatch(deletePostReceiveActionCreator(parseData))
      }, 2000)
   }catch (e){
      dispatch(deletePostFailureActionCreator(e))
   }
}

export default {
   fetchPosts,
   fetchPostById,
   updatePost,
   createPost,
   deletePost
}