import { BabyName } from "./components/BabyNameView";
import { babies, OneBaby } from "./babyNamesData";
import { SearchBar } from "./components/SearchBar";
import filterData from "./utils/filter";
import { useState } from "react";
import { favs } from "./components/BabyNameView";
//(clickedName: OneBaby) => void


function App(): JSX.Element {
  const [inputText, setInputText] = useState("");
  const filteredBabies = filterData(babies, inputText);
  
  const [selectedName, setSelectedName] = useState('');

  const findName = (event: React.ChangeEvent<HTMLInputElement>) => {
    //convert input text to lower case
    const lowerCase = event.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <>
      <SearchBar value={inputText} onChange={findName} />
      <hr />
      <h2>Favourite names</h2>
      <p> {favs}</p>
      {filteredBabies.map((oneBaby: OneBaby) => {
        return <BabyName key={oneBaby.id} baby={oneBaby} onClick= {() =>
          setSelectedName(oneBaby.name)} />;
      })}
    </>
  );
}

export default App;
