type HandlerFunction = (event: React.ChangeEvent<HTMLInputElement>) => void;

interface TextProps {
  value: string;
  onChange: HandlerFunction;
}

export function SearchBar({ value, onChange }: TextProps): JSX.Element {
  return (
    <>
      <input placeholder="Search a name" value={value} onChange={onChange} />
    </>
  );
}
