import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import todoReducer from "./todo/reducers";
import filterReducer from "./filter/reducers";
import thunk from "redux-thunk";
import postReducer from "./post/reducers";

const rootReducer = combineReducers({
   todos: todoReducer,
   activeTodoFilter: filterReducer,
   posts: postReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))