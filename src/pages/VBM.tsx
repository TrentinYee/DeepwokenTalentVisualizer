import Button from "../components/Button";
import "./pageCSS/VBM.css";

const VBM = () => {
  return (
    <>
      <h1 className="text-white">Visual Build Maker</h1>
      <span className="grid-wrapper">
        <span>
          <div className="grid-header fs-2 text-white">Body</div>

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

          <div className="grid-header fs-2 text-white">Mind</div>
          <div className="button-grid">
            {" "}
            {/* Mind stat grid */}
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
        </span>

        <span>
          <div className="vr"></div>
        </span>

        <span>
          {/* Weapons stat grid */}

          <div className="grid-header fs-2 text-white">Weapons</div>

          <div className="button-grid">
            <Button color="heavy" onClick={() => console.log("Clicked")}>
              Heavy
            </Button>
            <Button color="medium" onClick={() => console.log("Clicked")}>
              Medium
            </Button>
            <Button color="light" onClick={() => console.log("Clicked")}>
              Light
            </Button>
          </div>

          {/*Elements stat grid */}

          <div className="grid-header fs-2 text-white">Elements</div>

          <div className="button-grid">
            <Button color="flame" onClick={() => console.log("Clicked")}>
              Flamecharm
            </Button>
            <Button color="frost" onClick={() => console.log("Clicked")}>
              Frostdraw
            </Button>
            <Button color="thunder" onClick={() => console.log("Clicked")}>
              Thundercall
            </Button>
            <Button color="gale" onClick={() => console.log("Clicked")}>
              Galebreathe
            </Button>
            <Button color="shadow" onClick={() => console.log("Clicked")}>
              Shadowcast
            </Button>
            <Button color="iron" onClick={() => console.log("Clicked")}>
              Ironsing
            </Button>
            <div className="last">
              <Button color="blood" onClick={() => console.log("Clicked")}>
                Bloodrend
              </Button>
            </div>
          </div>
        </span>
      </span>
    </>
  );
};

export default VBM;
