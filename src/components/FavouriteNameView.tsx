import { OneBaby } from "../babyNamesData"

interface FavouriteNamesProps{
    favName: OneBaby
    functionRemove: (name: OneBaby)=> any;
}


export function FavouriteNames(props: FavouriteNamesProps): JSX.Element {

return(
    <button
            key={props.favName.id}
            className={props.favName.sex === "f" ? "femaleb" : "maleb"}
            onClick={() => props.functionRemove(props.favName)}
          >
            {props.favName.name}
          </button>
)

}