import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Item } from '@common/types';
import { ItemComponent } from '@components/ItemComponent';

interface ListComponentProps {
    items: Item[];
    deleteItem: any;
    editItem: any;
}

export const ListComponent = ({ items, deleteItem, editItem } : ListComponentProps) => {
   
    return (
        <div className="list">
            <Typography variant="h5">The List</Typography>
            <ul className="list_body">
                {items?.map((item, index) => (
                    <li key={item.id}>
                        <ItemComponent 
                            index={index}
                            item={item} 
                            deleteItem={deleteItem}
                            editItem={editItem}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}