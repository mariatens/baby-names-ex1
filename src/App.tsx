import { BabyName } from "./components/BabyNamesView";
import babyData from "./babyNamesData.json";
import { OneBaby } from "./components/BabyNamesView";
function App(): JSX.Element {
  return (
    {
      babyData.map((oneBaby: OneBaby) => (
          <BabyName
              key={oneBaby.id}
              baby = {baby}
          />
      ))
  }
  )
}

export default App; 
