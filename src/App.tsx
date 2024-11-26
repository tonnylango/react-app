import ListGroup from "./components/ListGroup";
import { Fragment, useState } from "react";
import { MouseEvent } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handle = (item: string) => {
    console.log(item);
  };

  return (
    <>
      {/* <ListGroup items={items} heading="Cities" onSelect={handle} /> */}
      {/* <Alert >
        Hello <span> <b>world</b> </span>world
      </Alert> */}

{/* <Button onClick={() => console.log('Clicked')}>A Button</Button> */}

<ListGroup items={items} heading="Cities" onSelect={handle} />

    </>
  );
}

export default App;
