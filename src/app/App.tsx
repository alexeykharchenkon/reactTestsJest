import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemsActions from '@common/store/actionCreators/itemsActions';
import '@styles/main.css'
import { ListComponent } from '@components/ListComponent';
import { FormComponent } from '@components/FormComponent';
import { Item } from '@common/types';

const mapStateToProps = (state: any) => ({
      items: state.itemsState.items,
      activeItem: state.itemsState.activeItem
});
const mapDispatchToProps = (dispatch: any) => ({
      itemsActions: bindActionCreators(itemsActions, dispatch),
});

interface AppProps {
  items: Item[];
  activeItem: Item;
  itemsActions: any;
}

const App = ({items, activeItem, itemsActions}: AppProps) => {
  const { addItem, deleteItem, editItem, updateItem } = itemsActions;

  return (
    <div className="app">
      <ListComponent items={items} deleteItem={deleteItem} editItem={editItem} />
      <FormComponent addItem={addItem} updateItem={updateItem} activeItem={activeItem}/>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)