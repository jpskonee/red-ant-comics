import {CLOSENAV} from "./NavToggleTypes";

const INITIAL_STATE: boolean = false

const toggleNav = (state = INITIAL_STATE, action: {type: string}) => {
    switch (action.type) {
        case CLOSENAV:
            return  !state;
            
        default: return state
    }
}

export default toggleNav