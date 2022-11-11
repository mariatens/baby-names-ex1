

export interface OneBaby{
    id: number;
    name: string;
    sex: string;
}
interface BabyNamesProps{
    baby: OneBaby
}
export function BabyName (props: BabyNamesProps): JSX.Element{
    return(
       <ul key = {props.baby.id}>
        {props.baby.name}
        {props.baby.sex}
       </ul> 
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