interface NameProps {
  name: string;
}

function Message({ name }: NameProps) {
  //jsx - JS XML

  if (name) return <h1 className="display-1">Hello, {name}</h1>;
  return <h1 className="display-1">Hello world</h1>;
}

export default Message;
