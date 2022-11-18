interface TextProps {
  value: string;
  onChange: (typedName: string) => void;
}

export function SearchBar(props: TextProps): JSX.Element {
  return (
    <div className="margin-top">
      <input
        className="searchbar"
        placeholder="Search a name"
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </div>
  );
}
