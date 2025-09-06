import Button from "../components/Button";
import "./pageCSS/VBM.css";

const VBM = () => {
  return (
    <>
      <h1>Visual Build Maker</h1>
      <div className="grid-header">Body</div>

      <div className="button-grid">
        {" "}
        {/* Body stat grid */}
        <Button color="strength" onClick={() => console.log("Clicked")}>
          Strength
        </Button>
        <Button color="fortitude" onClick={() => console.log("Clicked")}>
          Fortitude
        </Button>
        <Button color="agility" onClick={() => console.log("Clicked")}>
          Agility
        </Button>
      </div>

      <div className="grid-header">Mind</div>
      <div className="button-grid">
        {" "}
        {/* Body stat grid */}
        <Button color="intelligence" onClick={() => console.log("Clicked")}>
          Intelligence
        </Button>
        <Button color="willpower" onClick={() => console.log("Clicked")}>
          Willpower
        </Button>
        <Button color="charisma" onClick={() => console.log("Clicked")}>
          Charisma
        </Button>
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
