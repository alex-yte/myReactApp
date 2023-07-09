interface Props {
  children: string;
  color?: "outline-warning" | "danger" | "primary" | "secondary";
  onButtonClick: () => void;
}

function Button({ children, onButtonClick, color = "primary" }: Props) {
  return (
    <button
      id="showAlert"
      type="button"
      className={"btn btn-" + color}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
}

export default Button;
