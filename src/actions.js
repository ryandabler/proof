export const LOAD_PROJECT_FILE = "LOAD_PROJECT_FILE";
export const loadProjectFile = dataURL => ({
    type: LOAD_PROJECT_FILE,
    dataURL
});

export const LOAD_PROJECTS = "LOAD_PROJECTS";
export const loadProjects = data => ({
    type: LOAD_PROJECTS,
    data
});

export const CREATE_PROJECT = "CREATE_PROJECT";
export const createProject = data => ({
    type: CREATE_PROJECT,
    data
});

export const LOAD_PROJECT_PAGES = "LOAD_PROJECT_PAGES";
export const loadProjectPages = data => ({
    type: LOAD_PROJECT_PAGES,
    data
});

export const SET_PAGE_COUNT = "SET_PAGE_COUNT";
export const setPageCount = pageCount => ({
    type: SET_PAGE_COUNT,
    pageCount
});

export const SET_PAGE = "SET_PAGE";
export const setPage = (pageNum, pageText) => ({
    type: SET_PAGE,
    pageNum,
    pageText
});