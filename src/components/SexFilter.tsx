interface SexFilterProps {
  onClickM: () => void;
  onClickF: () => void;
  onClickA: () => void;
  activeIndex: any;
}

export function SexFilter(props: SexFilterProps): JSX.Element {
  //It should be clear which filter (if any) is in effect at any time.
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
