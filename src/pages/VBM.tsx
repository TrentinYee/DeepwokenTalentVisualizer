import Button from "../components/Button";
import "./pageCSS/VBM.css";

const VBM = () => {
  return (
    <>
      <div className="container">
        {" "}
        {/* Mind and Body stat grid */}
        <div>
          <Button color="strength" onClick={() => console.log("Clicked")}>
            Strength
          </Button>
        </div>
        <div>
          <Button color="fortitude" onClick={() => console.log("Clicked")}>
            Fortitude
          </Button>
        </div>
        <div>
          <Button color="agility" onClick={() => console.log("Clicked")}>
            Agility
          </Button>
        </div>
        <div>
          <Button color="intelligence" onClick={() => console.log("Clicked")}>
            Intelligence
          </Button>
        </div>
        <div>
          <Button color="willpower" onClick={() => console.log("Clicked")}>
            Willpower
          </Button>
        </div>
        <div>
          <Button color="charisma" onClick={() => console.log("Clicked")}>
            Charisma
          </Button>
        </div>
      </div>

      <div>
        <Button color="heavy" onClick={() => console.log("Clicked")}>
          Heavy
        </Button>
      </div>
    </>
  );
};

export default VBM;
