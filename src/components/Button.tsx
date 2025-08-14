import "./Button.css";

interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color + " btn-circle"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
