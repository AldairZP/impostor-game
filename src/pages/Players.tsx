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

type modalFooter = "create" | "edit";

export const Players = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFooter, setModalFooter] = useState<modalFooter>("create");
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

  const handleModalFooter = () => {
    const createFooter = (
      <Button
        color="var(--color-blue-primary)"
        shadowColor="var(--color-blue-secondary)"
        onClick={() => {
          handleSave();
        }}
      >
        <span className="px-4">Agregar</span>
      </Button>
    );

    const editFooter = (
      <div className="flex gap-4">
        <Button
          color="var(--color-red-primary)"
          shadowColor="var(--color-red-secondary)"
          onClick={() => {
            handleDelete();
          }}
        >
          <span className="px-4">Eliminar</span>
        </Button>

        <Button
          color="var(--color-green-primary)"
          shadowColor="var(--color-green-secondary)"
          onClick={() => {
            handleSave();
          }}
        >
          <span className="px-4">Aceptar</span>
        </Button>
      </div>
    );
    return modalFooter === "create" ? createFooter : editFooter;
  };

  const handleButtonAdd = () => {
    setModalFooter("create");
    setIsModalOpen(true);
    setNewPlayerState(
      formattedPlayer({ id: crypto.randomUUID(), name: "", isImpostor: false })
    );
  };

  const handleButtonEdit = (player: Player) => {
    setModalFooter("edit");
    setIsModalOpen(true);
    setNewPlayerState(player);
  };

  const handleButtonDeleteAll = () => {
    setPlayers((prev) => prev.slice(0, 3));
  };

  const handleDelete = () => {
    if (players.length > 3) {
      setPlayers((prev) =>
        prev.filter((player) => player.id != newPlayerState.id)
      );
    }
    setIsModalOpen(false);
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
  };

  return (
    <>
      <div className="flex flex-col w-full h-full justify-start items-center gap-11 p-8">
        <div>regresar</div>
        <Card className="flex-10 flex-col p-4 gap-2 w-80">
          <Button
            color={"#6a994e"}
            shadowColor={"#386641"}
            className="w-full"
            onClick={() => {
              handleButtonAdd();
            }}
          >
            Agregar Jugador
          </Button>
          <div className="flex flex-col w-full overflow-auto items-center gap-2">
            {players.map((player: Player) => (
              <Button
                key={player.id}
                color={"var(--color-blue-primary)"}
                shadowColor={"var(--color-blue-secondary)"}
                className="w-full"
                onClick={() => {
                  handleButtonEdit(player);
                }}
              >
                <div className="flex w-full justify-between items-center px-4">
                  <span className="inline-block text-base">{player.name}</span>
                  <Pencil />
                </div>
              </Button>
            ))}
          </div>
        </Card>
        <Button
          color={"var(--color-red-primary)"}
          shadowColor={"var(--color-red-secondary)"}
          className="inline-block w-30"
          onClick={handleButtonDeleteAll}
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
        footer={handleModalFooter()}
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
