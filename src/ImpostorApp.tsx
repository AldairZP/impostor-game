import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Principal } from "./pages/Principal";
import { Players } from "./pages/Players";

export const ImpostorApp = () => {
  return (
    <div className="display flex w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/players" element={<Players />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
