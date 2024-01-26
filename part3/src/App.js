// Filename - App.js

import Sidebar from "./layout/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParentA, ChildA1, ChildA2 } from "./pages/ParentA";
import { ParentB, ChildB1, ChildB2, ChildB3 } from "./pages/ParentB";
import ParentC from "./pages/ParentC";
import { ParentD, ChildD1, ChildD2 } from "./pages/ParentD";
import Footer from "./layout/Footer";
function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/parentA" element={<ParentA />} />
          <Route path="/parentA/childA1" element={<ChildA1 />} />
          <Route path="/parentA/childA2" element={<ChildA2 />} />
          <Route path="/parentB" element={<ParentB />} />
          <Route path="/parentB/childB1" element={<ChildB1 />} />
          <Route path="/parentB/childB2" element={<ChildB2 />} />
          <Route path="/parentB/childB3" element={<ChildB3 />} />
          <Route path="/parentC" element={<ParentC />} />
          <Route path="/parentD" element={<ParentD />} />
          <Route path="/parentD/childD1" element={<ChildD1 />} />
          <Route path="/parentD/childD2" element={<ChildD2 />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
