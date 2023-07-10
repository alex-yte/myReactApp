interface Props {
  content: string;
}

function Form({ content }: Props) {
  return (
    <div>
      <div className="input-group input-group-sm mb-3 mt-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          {content}
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Пример размера поля ввода"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <button type="button" className="btn btn-primary">
        Add
      </button>
    </div>
  );
}

export default Form;
