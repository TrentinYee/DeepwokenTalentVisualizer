import "./Button.css";

interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

/* 
The color is intended to be used with the named css colors for each element
determined by the first word in each name:

frostcall would be "frost"
charisma would be "charisma"
heavy weapon would be "heavy"

*/
const Button = ({ children, color = "secondary", onClick }: Props) => {
  // the color is secondary by default
  return (
    <button className={"btn btn-" + color + " btn-circle"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
