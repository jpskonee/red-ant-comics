import {combineReducers} from "redux";
import favourriteReducer from './Favourite/favouriteReducers';
import toggleReducer from './NavToggle/NavToggleReducer';


const rootReducers = combineReducers({
    favourite: favourriteReducer,
    toggle: toggleReducer,
})


export default rootReducers