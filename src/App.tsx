import "./style.css";
import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Message from "./components/Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Form from "./components/Form";
import List from "./components/TheList";
import People from "./components/People";

function App() {
  let items = ["NY", "SF", "Tokyo", "London", "Paris"];
  let items2 = ["NY", "SF", "Tokyo", "London", "Paris"];
  let items3 = ["NY", "SF", "Tokyo", "London", "Paris"];
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleButtonClick = () => {
    // console.log("button clicked");
    let alert = document.getElementById("main-alert");
    setAlertVisibility(true);
    if (alert) {
      // alert.classList.toggle("alert-primary");
      alert.classList.toggle("alert-danger");
    }
  };

  return (
    <div>
      <People />
      <List item="text" />

      <Message name="Denis" />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span className="alert-link">world</span>!
        </Alert>
      )}

      <Button color="outline-warning" onButtonClick={handleButtonClick}>
        Click me
      </Button>
      <Form content="My Form" />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Message name="Denis" />
      <ListGroup
        items={items2}
        heading="Cities2"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
