import {
    LOAD_PROJECT_FILE,
    LOAD_PROJECTS,
    CREATE_PROJECT,
    LOAD_PROJECT_PAGES,
    SET_PAGE_COUNT,
    SET_PAGE
} from "./actions";

const initialState = {
    file: null, // Remove when converted to projects list
    projects: [],
    currentProject: null,
    pages: [],
    pageCount: 0
}

export const reducer = (state = initialState, action) => {
    if (action.type === LOAD_PROJECT_FILE) {
        return Object.assign({}, state, { file: action.dataURL });
    } else if (action.type === LOAD_PROJECTS) {
        return Object.assign({}, state, { projects: action.data });
    } else if (action.type === CREATE_PROJECT) {
        const { name, remote } = action.data;
        return Object.assign({}, state, { projects: [...state.projects, { name, remote }] });
    } else if (action.type === LOAD_PROJECT_PAGES) {
        return Object.assign({}, state, { pages: action.data });
    } else if (action.type === SET_PAGE_COUNT) {
        return Object.assign({}, state, { pageCount: action.pageCount });
    } else if (action.type === SET_PAGE) {
        const page = state.pages.find(page => page.page === action.pageNum);
        const idx = state.pages.indexOf(page);
        const newPage = Object.assign({}, page, { text: action.pageText });
        
        return Object.assign({}, state, { pages: [
            ...state.pages.slice(0, idx),
            newPage,
            state.pages.slice(idx)
        ]});
    }

    return state;
}