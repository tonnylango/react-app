import { useState } from "react";

interface Item {
  id: number;
  action: string;
  date: Date;
  isDone: boolean;
}

interface Props {
  items: Item[];
  heading: string;
  onSelect: (item: Item) => void;
}

function ListGroup2({ items, heading, onSelect }: Props) {
  //let selectedIndex = -1;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //can use a message or a function

  //const handleCLick = (event : MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* {props.items.length === 0 ? <p>No items found</p> : null} */}
      {items.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup2;
