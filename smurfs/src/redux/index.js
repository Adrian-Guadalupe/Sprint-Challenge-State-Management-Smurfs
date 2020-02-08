import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { FETCH_DATA, UPDATE_SMURFS, SET_ERROR, POST_DATA } from './actions';

const initialState = {
   smurfs: [],
   isFetchingData: false,
   error: ''
}

const reducer = (state = initialState, action) => {
   switch(action.type) {
      case FETCH_DATA: 
         return {
            ...state,
            isFetchingData: true,
            smurfs: []
      }
      case UPDATE_SMURFS:
         return {
            ...state,
            smurfs: action.payload,
            isFetchingData: false
      }
      case SET_ERROR:
         return {
            ...state,
            isFetchingData: false,
            error: action.payload
      }
      case POST_DATA:
         return {
            ...state,
            isFetchingData: false,
            smurfs: action.payload
         }
      default: return state
   }
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()))
export default store;