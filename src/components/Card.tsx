type Props = {
  children?: React.ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <div className="flex w-full min-h-6 bg-white p-6 rounded-2xl shadow-md">
      {children}
    </div>
  );
};
