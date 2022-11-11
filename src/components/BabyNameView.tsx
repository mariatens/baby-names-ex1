import { OneBaby } from "../babyNamesData";
import "../styles.css";

interface BabyNamesProps {
  baby: OneBaby;
}
export function BabyName(props: BabyNamesProps): JSX.Element {
  return (
    <button
      style={{ color: props.baby.sex === "f" ? "pink" : "blue" }}
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
