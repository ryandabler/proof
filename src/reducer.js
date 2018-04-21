import { LOAD_FILE } from "./actions";

const initialState = {
    file: null, // Remove when converted to projects list
    projects: []
}

export const reducer = (state = initialState, action) => {
    if (action.type === LOAD_FILE) {
        return Object.assign({}, state, { file: action.dataURL });
    }

    return state;
}