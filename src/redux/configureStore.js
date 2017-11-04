import {createStore, applyMiddleware, combineReducers} from "redux";
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger(); // 初始化

const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore);

const initialState = {}; //The initial state of this reducer (will be combined with the states of other reducers as your app grows)

export default function reducer(state = initialState, action){ // a function that has two parameters, state (which is initialized as our initialState obj), and action, which we'll cover soon.
  switch (action.type){
    default:
      return state;
  }
}

const reducer = combineReducers({
  toDoApp
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;