
interface TextProps {
  value: string;
  onChange: (typedName: string) => void;
}

export function SearchBar({ value, onChange }: TextProps): JSX.Element {
  return (
    <>
      <input placeholder="Search a name" value={value} onChange={(event) => onChange(event.target.value)} />
    </>
  );
}
