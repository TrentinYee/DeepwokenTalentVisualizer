import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import TalentTrees from "./pages/TalentTrees.tsx";
import VisualBuildMaker from "./pages/VBM.tsx";

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
          <Route path="/TalentTrees" element={<TalentTrees />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
