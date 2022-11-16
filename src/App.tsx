import { useState } from "react";
import { babies, OneBaby } from "./babyNamesData";
import { BabyName } from "./components/BabyNameView";
import { SearchBar } from "./components/SearchBar";
import filterData from "./utils/filter";
//(clickedName: OneBaby) => void

function App(): JSX.Element {
  const [inputText, setInputText] = useState("");
  const filteredBabies = filterData(babies, inputText);

  //Save favs
  const [selectedName, setSelectedName] = useState<OneBaby>();
  const [savedNames, setSavedNames] = useState<OneBaby[]>([]);
  const handleFavs = (name: OneBaby) => {
    setSelectedName(name);
    setSavedNames([...savedNames, name]);
  };
  //Delete fav ones that get clicked
  const removeElement = (name: string) => {
    const updatedNames = savedNames.filter(
      (savedName) => savedName.name !== name
    );
    setSavedNames(updatedNames);
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
      {savedNames.map((eachSavedBaby: OneBaby) => {
        return (
          <button
            key={eachSavedBaby.id}
            className={eachSavedBaby.sex === "f" ? "femaleb" : "maleb"}
            onClick={() => removeElement(eachSavedBaby.name)}
          >
            {eachSavedBaby.name}
          </button>
        );
      })}
      <hr />
      {filteredBabies.map((oneBaby: OneBaby) => {
        return (
          <BabyName
            key={oneBaby.id}
            baby={oneBaby}
            onClick={() => {
              handleFavs(oneBaby);
            }}
          />
        );
      })}
    </>
  );
}

export default App;
