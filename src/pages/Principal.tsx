import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

export const Principal = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    return;
  };

  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center p-8 gap-11 bg-container">
      <span className="font-semibold text-6xl">Impostor</span>
      <Button
        onClick={handleClick}
        color={"var(--color-red-primary)"}
        shadowColor={"var(--color-red-secondary)"}
      >
        <span className="text-xl">Iniciar</span>
      </Button>

      <Card>
        <div className="flex flex-col w-min h-full gap-2 items-center">
          <span className="text-xl font-semibold">Configuración</span>

          <Button
            onClick={() => navigate("/players")}
            color={"var(--color-blue-primary)"}
            shadowColor={"var(--color-blue-secondary)"}
          >
            <span className="inline-block text-base w-[250px]">Jugadores</span>
          </Button>

          <Button
            onClick={handleClick}
            color={"var(--color-blue-primary)"}
            shadowColor={"var(--color-blue-secondary)"}
          >
            <span className="inline-block text-base w-[250px]">Impostores</span>
          </Button>

          <Button
            onClick={handleClick}
            color={"var(--color-blue-primary)"}
            shadowColor={"var(--color-blue-secondary)"}
          >
            <span className="inline-block text-base w-[250px]">Categorías</span>
          </Button>
          <Button
            onClick={handleClick}
            color={"var(--color-blue-primary)"}
            shadowColor={"var(--color-blue-secondary)"}
          >
            <span className="inline-block text-base w-[250px]">Tiempo</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};
