export type ActiveIndex = "a"|"f"|"m"

interface SexFilterProps {
  onClickM: () => void;
  onClickF: () => void;
  onClickA: () => void;
  activeIndex: ActiveIndex;
}

export function SexFilter(props: SexFilterProps): JSX.Element {
  return (
    <>
      <button 
        className={props.activeIndex === "m" ? "isactive" : ""}onClick={props.onClickM}>
        Male
      </button>
      <button 
        className={props.activeIndex === "f" ? "isactive" : ""}onClick={props.onClickF}>
        Female
      </button >
      <button 
        className={props.activeIndex === "a" ? "isactive" : ""} onClick={props.onClickA}>
        All
      </button>
    </>
  );
}
