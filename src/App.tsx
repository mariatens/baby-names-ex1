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
  
  //trying save favs
  // const favs:any[] = []
  const [selectedName, setSelectedName] = useState('a');
  const [savedNames, setSavedNames] = useState<string[]>([])
  const handleFavs = (name: string) =>{
    setSelectedName(name)
    setSavedNames([...savedNames,
      name])
  }

  const findName = (event: React.ChangeEvent<HTMLInputElement>) => {
    //convert input text to lower case
    const lowerCase = event.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <>
      <SearchBar value={inputText} onChange={findName} />
      <hr />
      <h2>Favourite names:</h2>
      {savedNames.map((eachName: string)=> {return <button key = {eachName} >{eachName}</button>})}
      <hr/>
      {filteredBabies.map((oneBaby: OneBaby) => {
        return <BabyName key={oneBaby.id} baby={oneBaby} onClick  = {() => {handleFavs(oneBaby.name); console.log(savedNames)}}/>;
      })}
    </>
  );
}

export default App;
//{favs.push(oneBaby.name)} working in console