import { createStore } from "redux";

import { gardenReducer } from "./reducer";

const store = createStore(
    gardenReducer
);

export default store;