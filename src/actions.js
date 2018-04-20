export const LOAD_FILE = "LOAD_FILE";
export const loadFile = dataURL => ({
    type: LOAD_FILE,
    dataURL
});