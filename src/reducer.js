import {
    LOAD_FILE,
    LOAD_DATA
} from "./actions";

const initialState = {
    file: null, // Remove when converted to projects list
    projects: []
}

export const reducer = (state = initialState, action) => {
    if (action.type === LOAD_FILE) {
        return Object.assign({}, state, { file: action.dataURL });
    } else if (action.type === LOAD_DATA) {
        return Object.assign({}, state, { projects: action.data });
    }

    return state;
}