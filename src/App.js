// import { Routes, Route } from "react-router-dom";

// import About from "./Pages/About";
// import Portfolio from "./Pages/Portfolio";
// import Contact from "./Pages/Contact";
import MainNavigation from "./Components/Layout/MainNavigation";
import MainContent from "./Components/Layout/MainContent";
import DropDown from "./Components/dropdown";
// import dropDown from "./Components/dropdown";

function App() {
  return (
    <div>
      <MainNavigation />
      <MainContent />
      {/* <div>
      <DropDown />
      </div> */}
      {/* <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes> */}
    </div>
  );
}

export default App;
