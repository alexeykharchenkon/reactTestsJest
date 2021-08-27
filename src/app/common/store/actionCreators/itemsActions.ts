import { Item } from "@common/types";
import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, UPDATE_ITEM } from "@common/store/actions";

export const addItem = (item: Item) => ({type: ADD_ITEM, item});
export const deleteItem = (id: string) => ({type: DELETE_ITEM, id});
export const editItem = (id: string) => ({type: EDIT_ITEM, id});
export const updateItem = (item: Item) => ({type: UPDATE_ITEM, item});