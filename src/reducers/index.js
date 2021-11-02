import favoriteReducer from './favoriteReducer';
import movieReducer from './movieReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    movie: movieReducer,
    favorite: favoriteReducer
});