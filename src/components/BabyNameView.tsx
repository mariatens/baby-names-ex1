import { OneBaby } from "../babyNamesData";
import '../styles.css'

interface BabyNamesProps {
  baby: OneBaby;
}
export function BabyName(props: BabyNamesProps): JSX.Element {
  return (
    <button
      className = {props.baby.sex === "f" ? "femaleb" : "maleb"}
      key={props.baby.id}
    >
      {props.baby.name}
    </button>
  );
}
// style={{ background: props.baby.sex === "f" ? "red" : "green" }}