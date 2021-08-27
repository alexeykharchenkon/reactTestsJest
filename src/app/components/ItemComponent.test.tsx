import { render, screen } from "@testing-library/react";
import { ItemComponent } from "./ItemComponent";

const deleteItem = jest.fn();

describe('Item Component', () => {
    it('renders ItemComponent', () => {
        render(
            <ItemComponent
                item={{id: '1', firstName: "Item 1", lastName: "1", email: "1"}} 
                index={1}
                deleteItem={deleteItem}
                editItem={()=>{}}
            />
        );
        expect(screen.getByText(/Item 1/i)).toBeInTheDocument();
    });

    it('Tem snapshot', () => {
        const item = render(
            <ItemComponent
                item={{id: '1', firstName: "Item 1", lastName: "1", email: "1"}} 
                index={1}
                deleteItem={deleteItem}
                editItem={()=>{}}
            />
        );
            expect(item).toMatchSnapshot();

    })
});