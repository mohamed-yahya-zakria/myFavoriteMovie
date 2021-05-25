/* import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
    myReducer: searchReducer
}); */


import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
  movies: searchReducer
});
