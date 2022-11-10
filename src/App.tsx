import babyData from "./babyNamesData.json";
import printNames from "./utils/printNames"

function App(): JSX.Element {
  return <h1>{printNames(babyData)}</h1>;
}

export default App; 
