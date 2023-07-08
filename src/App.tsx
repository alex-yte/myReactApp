import ListGroup from "./components/ListGroup";
import Message from "./components/Message";
import Alert from "./components/alert";

function App() {
  let items = ["NY", "SF", "Tokyo", "London", "Paris"];
  let items2 = ["NY", "SF", "Tokyo", "London", "Paris"];
  let items3 = ["NY", "SF", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Message name="Alex" />
      <Alert>
        Hello <span className="alert-link">world</span>!
      </Alert>

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
