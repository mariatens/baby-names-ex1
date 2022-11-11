import { BabyName } from "./components/BabyNameView";
import { babies, OneBaby } from "./babyNamesData";
import { SearchBar } from "./components/SearchBar";
import { filterData } from "./utils/filter";
import { useState } from "react";

function App(): JSX.Element {
  const [inputText, setInputText] = useState("");
  const filteredBabies = filterData(babies, inputText);
  const handlerFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    //convert input text to lower case
    const lowerCase = event.target.value.toLowerCase();
    setInputText(lowerCase);
  }
  return (
    <>
      <SearchBar 
        value ={inputText}
        onChange ={handlerFunction}
      />

      <hr />
      {filteredBabies.map((oneBaby: OneBaby) => {
        return <BabyName key={oneBaby.id} baby={oneBaby} />;
      })}
    </>
  );
}

export default App;
