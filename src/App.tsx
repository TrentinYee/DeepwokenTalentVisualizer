import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VisualBuildMaker from "./pages/VBM";

const App = () => {
  const pages = ["Home", "VisualBuildMaker", "TalentTrees"];
  const paths = ["/", "/VisualBuildMaker", "/TalentTrees"];

  return (
    <>
      <BrowserRouter>
        <Navbar items={pages} links={paths} heading="DVBM"></Navbar>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/VisualBuildMaker" element={<VisualBuildMaker />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
