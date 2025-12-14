type Props = {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  footer: React.ReactNode;
  onClose: VoidFunction;
};

export const Modal = ({
  isOpen = true,
  title,
  children,
  footer,
  onClose,
}: Props) => {
  // const [open, setOpen] = useState(isOpen);
  return (
    <div
      style={{ visibility: isOpen ? "visible" : "hidden" }}
      className="flex absolute w-full h-dvh justify-center items-center bg-[#00000055]"
    >
      <div className="flex absolute justify-center items-center top-30 z-10 w-80 h-min flex-col p-6 gap-4 bg-white rounded-2xl">
        <span className="text-lg font-semibold">{title}</span>
        {children}
        {footer}
      </div>

      <div
        onClick={onClose}
        className="inline-block absolute w-full h-dvh"
      ></div>
    </div>
  );
};
