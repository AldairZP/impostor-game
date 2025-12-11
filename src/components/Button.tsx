type Props = {
  children: React.ReactNode;
  color: string;
  shadowColor: string;
  handleClick: VoidFunction;
};

export const Button = ({
  children,
  color,
  shadowColor,
  handleClick,
}: Props) => {
  return (
    <button
      onClick={handleClick}
      className="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base"
    >
      <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"></span>

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
        className="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg border-2 border-[#ffffff99] transform -translate-y-1  gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110"
      >
        {children}
      </div>
    </button>
  );
};
