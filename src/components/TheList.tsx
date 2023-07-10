interface Props {
  item: string;
}

function List({ item }: Props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        <p>{item}</p>
      </label>
    </div>
  );
}

export default List;
