import {ADD, REMOVE} from "./favouriteTypes"
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const favs = cookies.get('favourite')
const INITIAL_STATE: string[] = favs ? favs : []

const favouriteReducer = (state = INITIAL_STATE, action: {type: string, payload: string}) => {

    switch (action.type) {
        case ADD:
            const newAddState =  [...state, action.payload ];
            cookies.set("favourite", [...state, action.payload ])
            return newAddState;

        case REMOVE:
            //removing initial state from localStorage
            
            const data = state.filter(fav => fav !== action.payload)
            const newRevState = [...data]
            cookies.set("favourite", [...data])
            return newRevState;
    
        default: return state;
    }

}

export default favouriteReducer;