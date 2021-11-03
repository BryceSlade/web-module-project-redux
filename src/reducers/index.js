import favoritesReducer from './favoritesReducer';
import movieReducer from './movieReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    movieReducer,
    favoritesReducer
});

export default rootReducer;