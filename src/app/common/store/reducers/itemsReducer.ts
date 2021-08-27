import { Item } from "@common/types";
import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, UPDATE_ITEM } from "@common/store/actions";

export const initialState = {
    items: [{
        id: "123",
        firstName: "Oleksii",
        lastName: "Ivanov",
        email: "hello@gmail.com",
    }],
    activeItem: undefined,
  }

export const itemsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
               items: [...state.items, {
                  id: action.item.id,
                  firstName: action.item.firstName,
                  lastName: action.item.lastName,
                  email: action.item.email,
                }],
                activeItem: undefined,
              }
        case DELETE_ITEM:
            return {...state, items: state.items.filter((t:Item) => t.id !== action.id)}
        case EDIT_ITEM:
            return {...state, activeItem: state.items.find((t:Item) => t.id === action.id)}   
        case UPDATE_ITEM:
            return {
                ...state, 
                items: [...state.items.map((item: Item) => {
                    if(item.id === action.item.id) {
                        return {
                            id: action.item.id,
                            firstName: action.item.firstName,
                            lastName: action.item.lastName,
                            email: action.item.email
                        }
                    }
                    else { return item }
                })],
                activeItem: undefined,
            }         
        default:
            return state;
    }
}