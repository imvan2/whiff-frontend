import React from "react";
import "./App.css";
import "./pages/PerfumeDetails/PerfumeDetails.css";
import Landing from "./pages/HomePage/Landing";
import PerfumeDetails from "./pages/PerfumeDetails/PerfumeDetails";
import Perfumes from "./pages/Perfumes/Perfumes";
import Brands from "./pages/Brands/Brands";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import NewPerfumes from "./pages/NewPerfumes/NewPerfumes";
// import Top5Page from "./pages/Top5/Top5Page";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/perfumes" element={<Perfumes />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/perfume-details/:id" element={<PerfumeDetails />} />
        {/* <Route path="/new" element={<NewPerfumes />} />
        <Route path="/top-5" element={<Top5Page />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
