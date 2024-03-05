import { Aside } from "./component/Aside";
import { Main } from "./component/Main";

function App() {
  return (
    <div className="flex justify-between">
      <Aside /> <Main />
    </div>
  );
}

export default App;
