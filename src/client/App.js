import React from "react";


import MainNavigation from "./Components/Layout/sideBar/MainNavigation";
import MainContent from "./Components/Layout/MainContent";

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
