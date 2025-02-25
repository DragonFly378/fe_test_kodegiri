import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.scss";
import Home from "./pages/Home.jsx";
import SoalSatuSampaiDua from "./pages/SoalSatuSampaiDua.jsx";
import SoalTigaSampaiEnam from "./pages/SoalTigaSampaiEnam.jsx";
import SoalTujuh from "./pages/SoalTujuh.jsx";
import SoalDelapan from "./pages/SoalDelapan.jsx";
import SoalSembilan from "./pages/SoalSembilan.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route index element={<Home />} />
        <Route path="soalsatudua" element={<SoalSatuSampaiDua />} />
        <Route path="soaltigaenam" element={<SoalTigaSampaiEnam />} />
        <Route path="soaltujuh" element={<SoalTujuh />} />
        <Route path="soaldelapan" element={<SoalDelapan />} />
        <Route path="soalsembilan" element={<SoalSembilan />} />
      </Routes>{" "}
    </StrictMode>
  </BrowserRouter>
);
