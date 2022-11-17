import { OneBaby } from "../babyNamesData";
import "../styles.css";

interface BabyNamesProps {
  baby: OneBaby;
  onClick: (event: any) => void;
}
export const favs: string[] = [];

export function BabyName(props: BabyNamesProps): JSX.Element {
  return (
    <button
      className= {props.baby.sex === "f" ? "femaleb" : "maleb"}
      key={props.baby.id}
      //include an onClick function that has the name saved in a fav list
      onClick={props.onClick}
    >
      {props.baby.name}
    </button>
  );
}
