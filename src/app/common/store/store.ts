import { createStore } from 'redux';
import { reducer } from '@common/store/reducers/rootReducer';

export const store = createStore(reducer);