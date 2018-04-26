import {
    LOAD_FILE,
    LOAD_PROJECTS,
    CREATE_PROJECT,
    LOAD_PROJECT_PAGES
} from "./actions";

const initialState = {
    file: null, // Remove when converted to projects list
    projects: [],
    currentProject: null,
    pages: []
}

export const reducer = (state = initialState, action) => {
    if (action.type === LOAD_FILE) {
        return Object.assign({}, state, { file: action.dataURL });
    } else if (action.type === LOAD_PROJECTS) {
        return Object.assign({}, state, { projects: action.data });
    } else if (action.type === CREATE_PROJECT) {
        const { name, remote } = action.data;
        return Object.assign({}, state, { projects: [...state.projects, { name, remote }] });
    } else if (action.type === LOAD_PROJECT_PAGES) {
        return Object.assign({}, state, { pages: action.data });
    }

    return state;
}