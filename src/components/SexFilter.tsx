interface SexFilterProps {
    onClickM: () => void;
    onClickF: () => void;
    onClickA: () => void;
  }
  

export function SexFilter(props: SexFilterProps): JSX.Element {
    //It should be clear which filter (if any) is in effect at any time.
   return (
    <>
    <button className = {""} onClick = {props.onClickM}>Male</button> 
    <button className = ""onClick = {props.onClickF}>Female</button>
    <button onClick = {props.onClickA}>All</button>
    </>
   )
}
// generalBabies.filter(baby) => sex === "f")
// generalBabies.filter(baby) => sex === "m")