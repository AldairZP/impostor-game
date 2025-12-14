import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Principal } from "./pages/Principal";
import { Players } from "./pages/Players";
import { useEffect } from "react";

const defaultPlayers = [
  { id: crypto.randomUUID(), name: "Jugador 1", isImpostor: false },
  { id: crypto.randomUUID(), name: "Jugador 2", isImpostor: false },
  { id: crypto.randomUUID(), name: "Jugador 3", isImpostor: false },
];

export const ImpostorApp = () => {
  useEffect(() => {
    const exist = localStorage.getItem("players");
    if (!exist) {
      localStorage.setItem("players", JSON.stringify(defaultPlayers));
    }
  }, []);

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
