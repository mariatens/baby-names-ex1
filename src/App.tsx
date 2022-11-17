import { useState } from "react";
import { babies, OneBaby } from "./babyNamesData";
import { BabyName } from "./components/BabyNameView";
import { SearchBar } from "./components/SearchBar";
import { SexFilter } from "./components/SexFilter";
import filterData from "./utils/filter";

function App(): JSX.Element {
  const [generalBabies, setGeneralBabies]= useState<OneBaby[]>(babies) // starting with babies dataset
  const [inputText, setInputText] = useState("");
  const [savedNames, setSavedNames] = useState<OneBaby[]>([]);
  const filteredBabies = filterData(generalBabies, inputText);

  // Delete general ones that get clicked
  const removeElementFromGeneralList = (name: OneBaby) => {
    const updatedNames = filteredBabies.filter(
      (filteredBaby) => filteredBaby !== name)
    setGeneralBabies(updatedNames);
  };

   //Save favs
  
  const handleFavs = (name: OneBaby) => {
    removeElementFromGeneralList(name)
    setSavedNames([...savedNames, name])  
  };
  // Save what I write in the search bar
  const saveTypedName = (typedName: string) => {
    setInputText(typedName);
  };

  // Delete fav ones that get clicked and return them to the same place
  const removeFavElementFromList = (name: OneBaby) => {
    const updatedNames = savedNames.filter(
      (savedName) => savedName !== name
    );
    setSavedNames(updatedNames);
    const orderedBabies = [...generalBabies, name]
    orderedBabies.sort((a, b) => {
      const fa = a.name;
      const fb = b.name;
    
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    setGeneralBabies(orderedBabies)
    
  };

  const handleFemaleSex = () => {
    const females = generalBabies.filter((baby) => baby.sex === "f")
    setGeneralBabies(females)
  }

  const handleMaleSex = () => {
    const males = generalBabies.filter((baby) => baby.sex === "m")
    setGeneralBabies(males)
  }

  return (
    <>
      <SearchBar value={inputText} onChange={saveTypedName} />
      <SexFilter 
            onClickF={handleFemaleSex}
            onClickM={handleMaleSex}/>
      <hr />
      <h2>Favourite names:</h2>
      {savedNames.map((eachSavedBaby: OneBaby) => {
        return (
          <button
            key={eachSavedBaby.id}
            className={eachSavedBaby.sex === "f" ? "femaleb" : "maleb"}
            onClick={() => removeFavElementFromList(eachSavedBaby)}
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
