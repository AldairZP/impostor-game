import { cn } from "../untils/cn";

type Props = {
  children: React.ReactNode;
  color: string;
  shadowColor: string;
  className?: string;
  onClick: VoidFunction;
};

export const Button = ({
  children,
  color,
  shadowColor,
  className,
  onClick,
}: Props) => {
  return (
    <div className={cn("", className)}>
      <button
        onClick={onClick}
        className="relative group w-full border-none bg-transparent py-0 mt-1 mb-0.5 outline-none cursor-pointer font-mono font-light"
      >
        <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-50 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-active:translate-y-px"></span>

        <span
          style={{
            backgroundColor: shadowColor,
          }}
          className="absolute top-0 left-0 w-full h-full rounded-lg "
        ></span>

        <div
          style={{
            backgroundColor: color,
          }}
          className="relative flex items-center justify-center py-2 text-white rounded-lg border-2 border-[#ffffff99] transform -translate-y-1  gap-3 transition duration-10 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-active:-translate-y-0.5 brightness-100"
        >
          {children}
        </div>
      </button>
    </div>
  );
};
