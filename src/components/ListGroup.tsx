import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["NY", "SF", "Tokyo", "London", "Paris"];

  items.map((item) => <li>{item}</li>);

  const getMessage = () => {
    return items.length === 0 ? <p>No items</p> : null;
  };
  //   event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={`list-group-item item-${index}`}
            key={item}
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
