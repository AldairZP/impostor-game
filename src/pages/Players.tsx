import { Pencil } from "lucide-react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";
import { useEffect, useState } from "react";
import { Input } from "../components/Input";

type Player = {
  id: string;
  name: string;
  isImpostor: boolean;
};

export const Players = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPlayerState, setNewPlayerState] = useState<Player>({
    id: crypto.randomUUID(),
    name: "",
    isImpostor: false,
  });
  const [players, setPlayers] = useState<Player[]>(() => {
    const stored = localStorage.getItem("players");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  const formattedPlayer = (player: Player): Player => {
    const copy = player;
    copy.name = copy.name.trim();
    return copy;
  };

  const handleAdd = () => {
    setIsModalOpen(true);
  };

  const handleEdit = (player: Player) => {
    setIsModalOpen(true);
    setNewPlayerState(player);
  };

  const handleDeleteAll = () => {
    setPlayers((prev) => prev.slice(0, 3));
  };

  const handleSave = () => {
    if (newPlayerState.name === "") {
      setIsModalOpen(false);
      return;
    }

    setPlayers((prev) => {
      const index = prev.findIndex((player) => player.id === newPlayerState.id);
      if (index === -1) {
        return [...prev, formattedPlayer(newPlayerState)];
      }

      const copy = [...prev];
      copy[index] = formattedPlayer(newPlayerState);
      return copy;
    });

    setIsModalOpen(false);
    setNewPlayerState(
      formattedPlayer({ id: crypto.randomUUID(), name: "", isImpostor: false })
    );
  };

  return (
    <>
      <div className="flex flex-col w-full h-full justify-start items-center p-8 gap-11">
        <div>regresar</div>
        <Card className="flex-10 flex-col gap-4">
          <Button
            onClick={() => {
              handleAdd();
            }}
            color={"#6a994e"}
            shadowColor={"#386641"}
          >
            <div className="flex justify-center items-center w-[250px]">
              <span className="inline-block text-base ">Agregar Jugador</span>
            </div>
          </Button>
          <div className="flex flex-col w-min overflow-auto items-center gap-2">
            {players.map((player: Player) => (
              <Button
                key={player.id}
                onClick={() => {
                  handleEdit(player);
                }}
                color={"var(--color-blue-primary)"}
                shadowColor={"var(--color-blue-secondary)"}
              >
                <div className="flex justify-between items-center w-[250px]">
                  <span className="inline-block text-base ">{player.name}</span>
                  <Pencil />
                </div>
              </Button>
            ))}
          </div>
        </Card>
        <Button
          onClick={handleDeleteAll}
          color={"var(--color-red-primary)"}
          shadowColor={"var(--color-red-secondary)"}
        >
          Borrar Todo
        </Button>
      </div>
      <Modal
        isOpen={isModalOpen}
        title="Agrega Jugadores"
        onClose={() => {
          setIsModalOpen(false);
        }}
        footer={
          <Button
            color="var(--color-blue-primary)"
            shadowColor="var(--color-blue-secondary)"
            onClick={() => {
              handleSave();
            }}
          >
            Agregar
          </Button>
        }
      >
        <Input
          name="player"
          value={newPlayerState.name}
          onChange={(value) => {
            setNewPlayerState((prev) => ({
              ...prev,
              name: value,
            }));
          }}
        />
      </Modal>
    </>
  );
};
