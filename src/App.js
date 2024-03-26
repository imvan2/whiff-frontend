import React from "react";
import "./App.css";
import "./pages/PerfumeDetails/PerfumeDetails.css";
import Landing from "./pages/HomePage/Landing";
import PerfumeDetails from "./pages/PerfumeDetails/PerfumeDetails";
import Perfumes from "./pages/Perfumes/Perfumes";
import Brands from "./pages/Brands/Brands";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/perfumes" element={<Perfumes />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/perfume-details/:id" element={<PerfumeDetails />} />
          <Route path="/search" element={<SearchPage />} />
          {/* <Route path="/new" element={<NewPerfumes />} />
        <Route path="/top-5" element={<Top5Page />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
