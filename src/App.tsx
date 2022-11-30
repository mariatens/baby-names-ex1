import { useState } from "react";
import { babies, OneBaby } from "./babyNamesData";
import { BabyName } from "./components/BabyNameView";
import { SearchBar } from "./components/SearchBar";
import { ActiveIndex, SexFilter } from "./components/SexFilter";
import filterData from "./utils/filter";
import { FavouriteNames } from "./components/FavouriteNameView";

function App(): JSX.Element {
  // const [generalBabies, setGeneralBabies] = useState<OneBaby[]>(babies); // starting with babies dataset
  const [inputText, setInputText] = useState("");
  const [favouriteNames, setFavouriteNames] = useState<OneBaby[]>([]);
  const [activeIndex, setActiveIndex] = useState<ActiveIndex>("a");
  const babiesNotInFavs = babies.filter(baby => !favouriteNames.includes(baby))
  const matchedBabies = filterData(babiesNotInFavs, inputText, activeIndex);//notinfavs, remember to sort 

  //Save favs

  const handleAddFav = (name: OneBaby) => {
    setFavouriteNames([...favouriteNames, name]);
  };
  // Save what I write in the search bar
  const saveTypedName = (typedName: string) => {
    setInputText(typedName);
  };

  // Delete fav ones that get clicked and return them to the same place
  const removeFavElementFromList = (name: OneBaby) => {
    const updatedNames = favouriteNames.filter((savedName) => savedName !== name);
    setFavouriteNames(updatedNames);
    // orderedBabies.sort((a, b) => {
    //   const fa = a.name;
    //   const fb = b.name;

    //   if (fa < fb) {
    //     return -1;
    //   }
    //   if (fa > fb) {
    //     return 1;
    //   }
    //   return 0;
    // });
  };
  // handle sex filters

  const handleFemaleSex = () => {
    setActiveIndex("f");
  };

  const handleMaleSex = () => {
    setActiveIndex("m");
  };
  const handleAllSex = () => {
    setActiveIndex("a");
  };

  return (
    <>
      <SearchBar value={inputText} onChange={saveTypedName} />
      <SexFilter 
            onClickF={handleFemaleSex}
            onClickM={handleMaleSex}
            onClickA={handleAllSex}
            activeIndex={activeIndex}/>
      <hr />
      <h2>Favourite names:</h2>
      {favouriteNames.map((eachFavBaby: OneBaby) => {
        return (
          <FavouriteNames 
          key = {eachFavBaby.id} 
          favName = {eachFavBaby} 
          functionRemove = {removeFavElementFromList} />
        );
      })}
      <hr />
      {matchedBabies.map((oneBaby: OneBaby) => {
        return (
          <BabyName
            key={oneBaby.id}
            baby={oneBaby}
            onClick={() => {
              handleAddFav(oneBaby);
            }}
          />
        );
      })}
    </>
  );
}

export default App;
