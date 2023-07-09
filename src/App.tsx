import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Message from "./components/Message";
import Alert from "./components/alert";
import Button from "./components/button";

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
      <Message name="Alex" />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span className="alert-link">world</span>!
        </Alert>
      )}

      <Button color="outline-warning" onButtonClick={handleButtonClick}>
        Click me
      </Button>
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
