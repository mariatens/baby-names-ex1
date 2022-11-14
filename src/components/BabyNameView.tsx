import { OneBaby } from "../babyNamesData";
import "../styles.css";

interface BabyNamesProps {
  baby: OneBaby;
}
export function BabyName(props: BabyNamesProps): JSX.Element {
  return (
    <button
      style={{ background: props.baby.sex === "f" ? "red" : "green" }}
      key={props.baby.id}
    >
      {props.baby.name}
    </button>
  );
}

// export default function BabyNamesView(props: BabyNamesProps): JSX.Element{
//     return (
//         <>
//         </>
//     )
// }
