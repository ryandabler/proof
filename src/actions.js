export const LOAD_PROJECT_FILE = "LOAD_PROJECT_FILE";
export const loadFile = dataURL => ({
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