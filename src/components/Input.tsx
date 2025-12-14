type Props = {
  name: string;
  value: string;
  onChange: (value: string) => void;
};

export const Input = ({ name, value, onChange }: Props) => {
  return (
    <>
      <input
        type="text"
        className="p-2 border"
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </>
  );
};
