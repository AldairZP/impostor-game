import { Button } from "../components/Button";
import { Card } from "../components/Card";

export const Principal = () => {
  const handleClick = () => {
    return;
  };

  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center p-8 gap-11 bg-container">
      <span className="font-semibold text-4xl">Impostor</span>
      <Button
        handleClick={handleClick}
        color={"#C1121F"}
        shadowColor={"#780000"}
      >
        <span className="text-3xl">Iniciar</span>
      </Button>

      <Card>
        <div className="flex flex-col w-full h-full gap-3.5 items-center">
          <span className="text-2xl font-semibold">Configuración</span>

          <Button
            handleClick={handleClick}
            color={"#669BBC"}
            shadowColor={"#003049"}
          >
            <span className="inline-block text-2xl w-[250px]">Jugadores</span>
          </Button>

          <Button
            handleClick={handleClick}
            color={"#669BBC"}
            shadowColor={"#003049"}
          >
            <span className="inline-block text-2xl w-[250px]">Impostores</span>
          </Button>

          <Button
            handleClick={handleClick}
            color={"#669BBC"}
            shadowColor={"#003049"}
          >
            <span className="inline-block text-2xl w-[250px]">Categorías</span>
          </Button>
          <Button
            handleClick={handleClick}
            color={"#669BBC"}
            shadowColor={"#003049"}
          >
            <span className="inline-block text-2xl w-[250px]">Tiempo</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};
