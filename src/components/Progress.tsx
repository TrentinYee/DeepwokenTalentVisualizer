import "./Progress.css";

interface Props {
  color?: string;
  value: string;
  rotation: string;
}

/* 
The color is intended to be used with the named css colors for each element in Progress.css
determined by the first word in each name:

frostcall would be "frost"
charisma would be "charisma"
heavy weapon would be "heavy"

rotation:
side for horizontal vert for vertical
*/
const Progress = ({ color, value = "0", rotation = "side" }: Props) => {
  return (
    <div className={`progress progress-${rotation}`}>
      <div
        className={`progress-bar bar-${color}`}
        style={{ width: `${value}%` }}
        role="progressbar"
        aria-valuenow={Number(value)}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
};

export default Progress;
