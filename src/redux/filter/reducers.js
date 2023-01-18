import {FILTER_TODO} from "./types";

export const TYPE_OF_FILTER = {
   SHOW_ACTIVE: 'SHOW_ACTIVE',
   SHOW_COMPLETED: 'SHOW_COMPLETED',
   SHOW_ALL: 'SHOW_ALL'

}

export const initialState = TYPE_OF_FILTER.SHOW_ALL

const filterReducer = (state = initialState, action) => {
   switch (action.type) {
      case FILTER_TODO:
         return action.payload
      default:
         return state
   }
}

export default filterReducer