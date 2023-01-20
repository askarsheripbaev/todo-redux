import {CLEAR_DATA, CLEAR_LIST, CREATE_POST, DELETE_POST, GET_POST, GET_POSTS, UPDATE_POST} from "./types";

const initialState ={
   loading : false,
   list: [],
   data: null,
   error: null
}

const postReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_POSTS.REQUEST:
         return {
            ...state,
            loading: true
         }
      case GET_POSTS.RECEIVE:
         return {
            ...state,
            list: action.payload,
            loading: false
         }
      case GET_POSTS.FAILURE:
         return {
            ...state,
            error: action.payload,
            loading: false
         }
      case GET_POST.REQUEST:
         return {
            ...state,
            loading: true
         }
      case GET_POST.RECEIVE:
         return {
            ...state,
            data: action.payload,
            loading: false
         }
      case GET_POST.FAILURE:
         return {
            ...state,
            error: action.payload,
            loading: false
         }
      case CREATE_POST.REQUEST:
         return {
            ...state,
            loading: true
         }
      case CREATE_POST.RECEIVE:
         return {
            ...state,
            loading: false
         }
      case CREATE_POST.FAILURE:
         return {
            ...state,
            error: action.payload,
            loading: false
         }
      case UPDATE_POST.REQUEST:
         return {
            ...state,
            loading: true
         }
      case UPDATE_POST.RECEIVE:
         return {
            ...state,
            loading: false
         }
      case UPDATE_POST.FAILURE:
         return {
            ...state,
            error: action.payload,
            loading: false
         }
      case DELETE_POST.REQUEST:
         return {
            ...state,
            loading: true
         }
      case DELETE_POST.RECEIVE:
         return {
            ...state,
            loading: false
         }
      case DELETE_POST.FAILURE:
         return {
            ...state,
            error: action.payload,
            loading: false
         }

      case CLEAR_LIST:
         return {
            ...state,
            list: [],
            error: null
         }

      case CLEAR_DATA:
         return {
            ...state,
            data: null,
            error: null
         }

      default:
         return state

   }
}

export default postReducer