import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div
      id="main-alert"
      className="alert alert-dismissible alert-primary fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Закрыть"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
