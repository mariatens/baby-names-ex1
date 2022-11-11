import { BabyName } from "./components/BabyNameView";
import { babies, OneBaby } from "./babyNamesData";
import { SearchBar } from "./components/SearchBar";

function App(): JSX.Element {
  return (
    <>
      <SearchBar />
      <hr />
      {babies.map((oneBaby: OneBaby) => {
        return <BabyName key={oneBaby.id} baby={oneBaby} />;
      })}
    </>
  );
}

export default App;
