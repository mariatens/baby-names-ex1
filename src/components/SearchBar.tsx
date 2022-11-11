import { useState } from "react";
import { babies } from "../babyNamesData";

export function SearchBar (): JSX.Element {
    const [inputText, setInputText] = useState("");
    // const filteredData = babies.filter((el) =>{
    //     if (inputText === ''){
    //         return el
    //     }
    //     else{
    //         return el.toLowerCase().includes(props.inputText)
    //     }
    // }
    // )
    return (
    <>
    <input 
     placeholder = "Search a name" 
     value={inputText}
     onChange = {(event) => {
        //convert input text to lower case
        const lowerCase = event.target.value.toLowerCase();
        setInputText(lowerCase);
     }}
     />
    </>
    )
}