import { Item } from "@app/common/types";
import { render, screen } from "@testing-library/react";
import { ListComponent } from "./ListComponent";

/*test('the list', () => {
    render(<ListComponent 
        items={[]}
        deleteItem={()=> {}}
        editItem={()=> {}}
    />);
    const linkElement = screen.getByText(/The List/i);
    expect(linkElement).toBeInTheDocument();
});*/

const items: Item[] = [
    {   
        id: '1',
        firstName: "Item 1",
        lastName: "1",
        email: '1'
    },
    {   
        id: '2',
        firstName: "2",
        lastName: "2",
        email: '2'
    },
    {   
        id: '3',
        firstName: "3",
        lastName: "3",
        email: '3'
    }
]

describe('List Component', () => {
    it('List renders', () => {
        render(<ListComponent 
            items={items}
            deleteItem={()=> {}}
            editItem={()=> {}}
        />);
        expect(screen.getByText(/Item 1/i)).toBeInTheDocument();
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
    it('List renders without data', () => {
        render(<ListComponent 
            items={[]}
            deleteItem={()=> {}}
            editItem={()=> {}}
        />);
        expect(screen.queryByRole('list')).toBeInTheDocument();
    });
    it('List snapshot', () => {
      const list = render(<ListComponent 
            items={items}
            deleteItem={()=> {}}
            editItem={()=> {}}
        />);
      expect(list).toMatchSnapshot();  
    });
    it('List snapshot empty', () => {
        const list = render(<ListComponent 
              items={[]}
              deleteItem={()=> {}}
              editItem={()=> {}}
          />);
        expect(list).toMatchSnapshot();  
      });
})