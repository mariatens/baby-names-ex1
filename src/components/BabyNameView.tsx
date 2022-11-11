import { OneBaby } from "../babyNamesData"

interface BabyNamesProps{
    baby: OneBaby
}
export function BabyName (props: BabyNamesProps): JSX.Element{
    return(
       <button key = {props.baby.id}>
        {props.baby.name}
       </button> 
    )
}

// export default function BabyNamesView(props: BabyNamesProps): JSX.Element{
//     return (
//         <>
//         {babyData.map((baby) => {
//             return <BabyName baby={baby} key = {/>
//         }
//         )}
//         </>
//     )
// }