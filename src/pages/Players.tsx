import { Pencil } from "lucide-react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";

export const Players = () => {
  const handleClick = () => {};

  return (
    <>
      <div className="flex flex-col w-full min-h-screen justify-start items-center p-8 gap-11">
        <div>regresar</div>
        <Card>
          <div className="flex flex-col w-full min-h-72 items-center gap-2">
            <Button
              handleClick={handleClick}
              color={"#669BBC"}
              shadowColor={"#003049"}
            >
              <div className="flex justify-between items-center w-[250px]">
                <span className="inline-block text-2xl ">Jonathan</span>
                <Pencil />
              </div>
            </Button>
            <Button
              handleClick={handleClick}
              color={"#669BBC"}
              shadowColor={"#003049"}
            >
              <div className="flex justify-between items-center w-[250px]">
                <span className="inline-block text-2xl ">Luis</span>
                <Pencil />
              </div>
            </Button>
            <Button
              handleClick={handleClick}
              color={"#669BBC"}
              shadowColor={"#003049"}
            >
              <div className="flex justify-between items-center w-[250px]">
                <span className="inline-block text-2xl ">Luis</span>
                <Pencil />
              </div>
            </Button>
          </div>
        </Card>
      </div>
      <Modal />
    </>
  );
};
