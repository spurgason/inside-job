import { FETCH_CURRENT_WEATHER } from "../actions/types";

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}