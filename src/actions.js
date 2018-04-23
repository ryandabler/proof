export const LOAD_FILE = "LOAD_FILE";
export const loadFile = dataURL => ({
    type: LOAD_FILE,
    dataURL
});

export const LOAD_DATA = "LOAD_DATA";
export const loadData = data => ({
    type: LOAD_DATA,
    data
}); type: LOAD_DATA,
    data
});

export const CREATE_PROJECT = "CREATE_PROJECT";
export const createProject = data => ({
    type: CREATE_PROJECT,
    data
});