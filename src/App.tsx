import { BabyName } from "./components/BabyNameView";
import { babies, OneBaby } from "./babyNamesData";

function App(): JSX.Element {
  return (
    <>
    { babies.map((oneBaby: OneBaby) => {
        return <BabyName key={oneBaby.id} baby = {oneBaby}/>
        
      })}
    </>
  )
}

export default App; 
