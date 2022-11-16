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
  const [selectedName, setSelectedName] = useState<OneBaby>();
  const [savedNames, setSavedNames] = useState<OneBaby[]>([])
  const handleFavs = (name: OneBaby) =>{
    setSelectedName(name)
    setSavedNames([...savedNames,
      name])
  }
  //deleting the fav ones that get clicked
  const removeElement = (name: string) => {
      const updatedNames = savedNames.filter(
        (savedName) => savedName.name !== name
      );
      setSavedNames(updatedNames)
      console.log("it's working")
    };

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
      {savedNames.map((eachSavedBaby: OneBaby)=> {
        return <button key = {eachSavedBaby.id} 
                       className = {eachSavedBaby.sex === "f" ? "femaleb" : "maleb"} 
                       onClick = {() => removeElement(eachSavedBaby.name)}>
              {eachSavedBaby.name}</button>})}
      <hr/>
      {filteredBabies.map((oneBaby: OneBaby) => {
        return <BabyName key={oneBaby.id} baby={oneBaby} onClick  = {() => {handleFavs(oneBaby); console.log(savedNames)}}/>;
      })}
    </>
  );
}

export default App;
//{favs.push(oneBaby.name)} working in console