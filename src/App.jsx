import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="flex w-[80%] flex-col lg:flex-row  gap-5 lg:gap-20 relative mx-auto">
        <span className="lg:w-[20%] w-full">
          {" "}
          <Sidebar />
        </span>
        <div className="flex relative flex-col w-full lg:w-[80%]">
          <div className="absolute"></div>
          <div className="py-5">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
