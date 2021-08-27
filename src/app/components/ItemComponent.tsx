import React from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from '@styles/material';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Item } from '@common/types';

interface ItemComponentProps {
    item: Item;
    deleteItem: any;
    index: number;
    editItem: any;
}

export const ItemComponent = ({item, deleteItem, index, editItem} : ItemComponentProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.item}>
        <div>
          {index + 1}) {item.firstName} {item.lastName}; {item.email}
        </div>
        <div>
          <IconButton onClick={() => deleteItem(item.id)} >
            <DeleteIcon fontSize="medium" />
          </IconButton>
          <IconButton onClick={() => editItem(item.id)} >
            <EditIcon fontSize="medium" />
          </IconButton>
        </div>
    </Card>
  );
}

