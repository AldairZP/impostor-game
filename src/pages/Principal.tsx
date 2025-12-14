import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

export const Principal = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    return;
  };

  return (
    <div className="flex flex-col justify-center items-center-safe w-full min-h-screen gap-11 bg-container">
      <span className="font-semibold text-6xl">Impostor</span>
      <Button
        onClick={handleClick}
        color={"var(--color-red-primary)"}
        shadowColor={"var(--color-red-secondary)"}
        className="inline-block text-lg w-30"
      >
        Iniciar
      </Button>

      <Card className=" flex flex-col w-80 p-4 justify-center items-center gap-2">
        <span className="text-lg font-semibold">Configuración</span>

        <Button
          onClick={() => navigate("/players")}
          color={"var(--color-blue-primary)"}
          shadowColor={"var(--color-blue-secondary)"}
          className="inline-block text-base w-full"
        >
          Jugadores
        </Button>

        <Button
          onClick={handleClick}
          color={"var(--color-blue-primary)"}
          shadowColor={"var(--color-blue-secondary)"}
          className="inline-block text-base w-full"
        >
          Impostores
        </Button>

        <Button
          onClick={handleClick}
          color={"var(--color-blue-primary)"}
          shadowColor={"var(--color-blue-secondary)"}
          className="inline-block text-base w-full"
        >
          Categorías
        </Button>
        <Button
          onClick={handleClick}
          color={"var(--color-blue-primary)"}
          shadowColor={"var(--color-blue-secondary)"}
          className="inline-block text-base w-full"
        >
          Tiempo
        </Button>
      </Card>
    </div>
  );
};
