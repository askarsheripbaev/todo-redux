import {
   CLEAR_DATA,
   CLEAR_LIST,
   CREATE_POST,
   DELETE_POST,
   GET_POST,
   GET_POSTS,
   UPDATE_POST
} from "./types";

//-------------------------------------------
const getPostsRequestActionCreator = () => ({
   type: GET_POSTS.REQUEST
})

const getPostsReceiveActionCreator = (data) => ({
   type: GET_POSTS.RECEIVE,
   payload: data
})

const getPostsFailureActionCreator = (err) => ({
   type: GET_POSTS.FAILURE,
   payload: err
})
//-------------------------------------------

const getPostRequestActionCreator = () => ({
   type: GET_POST.REQUEST
})

const getPostReceiveActionCreator = (data) => ({
   type: GET_POST.RECEIVE,
   payload: data
})

const getPostFailureActionCreator = (err) => ({
   type: GET_POSTS.FAILURE,
   payload: err
})
//-------------------------------------------

const updatePostRequestActionCreator = () => ({
   type: UPDATE_POST.REQUEST
})

const updatePostReceiveActionCreator = (data) => ({
   type: UPDATE_POST.RECEIVE,
   payload: data
})

const updatePostFailureActionCreator = (err) => ({
   type: UPDATE_POST.FAILURE,
   payload: err
})
//-------------------------------------------

const createPostRequestActionCreator = () => ({
   type: CREATE_POST.REQUEST
})

const createPostReceiveActionCreator = (data) => ({
   type: CREATE_POST.RECEIVE,
   payload: data
})

const createPostFailureActionCreator = (err) => ({
   type: CREATE_POST.FAILURE,
   payload: err
})
//-------------------------------------------

const deletePostRequestActionCreator = () => ({
   type: DELETE_POST.REQUEST
})

const deletePostReceiveActionCreator = () => ({
   type: DELETE_POST.RECEIVE
})

const deletePostFailureActionCreator = (err) => ({
   type: DELETE_POST.FAILURE,
   payload: err
})

const clearPostsActionCreator = () => ({
   type: CLEAR_LIST
})

const clearDataActionCreator = () => ({
   type: CLEAR_DATA
})

export {
   getPostsRequestActionCreator,
   getPostsReceiveActionCreator,
   getPostsFailureActionCreator,

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
   deletePostFailureActionCreator,

    clearPostsActionCreator,
    clearDataActionCreator
}