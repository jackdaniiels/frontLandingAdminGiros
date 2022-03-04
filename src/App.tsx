import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Navigation } from "./routes/Navigation";

import { Template1Context } from "./context/Template1Context";
// import { useDataTemplate } from "./hooks/useDataTemplate";

function App() {
  // const value = useDataTemplate();
  (() => console.log(new Date(2022,2,4,8,30).toLocaleString(), "v1 ok"))();

  return (
    <div className="App">
      <Template1Context.Provider value={{}}>
        <Navigation />
      </Template1Context.Provider>
    </div>
  );
}

export default App;
