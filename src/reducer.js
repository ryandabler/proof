import {
    LOAD_FILE,
    LOAD_DATA,
    CREATE_PROJECT
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
    } else if (action.type === CREATE_PROJECT) {
        const { name, remote } = action.data;
        return Object.assign({}, state, { projects: [...state.projects, { name, remote }] });
    }

    return state;
}