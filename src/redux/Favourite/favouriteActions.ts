import {ADD, REMOVE} from "./favouriteTypes"


export const addFavourite = (payload: string) => {
    return {
        type: ADD,
        payload
    }
}


export const removeFavourite = (payload: string) => {
    return {
        type: REMOVE,
        payload
    }
}


