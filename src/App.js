import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Profile, } from "./components/Main";
import Footer from "./components/Footer";

function App() {

  const [currentPage, setCurrentPage] = useState("React-About");
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        <Routes>
          <Route path="/React-About" element={<About />} />
          <Route path="/React-Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;