interface SexFilterProps {
    onClickM: () => void;
    onClickF: () => void;
  }
  

export function SexFilter(props: SexFilterProps): JSX.Element {
 
   return (
    <>
    <button onClick = {props.onClickM}>Male</button>
    <button onClick = {props.onClickF}>Female</button>
    </>
   )
}
// generalBabies.filter(baby) => sex === "f")
// generalBabies.filter(baby) => sex === "m")