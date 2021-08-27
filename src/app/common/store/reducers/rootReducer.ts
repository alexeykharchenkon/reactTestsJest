import { combineReducers } from "redux";
import { itemsReducer } from "@common/store/reducers/itemsReducer";

export const reducer = combineReducers({
    itemsState: itemsReducer,
});