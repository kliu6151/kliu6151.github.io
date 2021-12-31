import {Routes,Route} from "react-router-dom";


import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Routes>
      <Route path='/' element={<About />}/>
      <Route path='/Portfolio' element={<Portfolio />}/>
      <Route path='/Contact' element={<Contact />}/>
    </Routes>
  );
}

export default App;
