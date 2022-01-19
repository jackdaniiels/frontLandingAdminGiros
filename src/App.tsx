import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Navigation } from "./routes/Navigation";
// import "swiper/scss/bundle";
import { Template1Context } from "./context/Template1Context";
import { useDataTemplate } from "./hooks/useDataTemplate";

function App() {
  const value = useDataTemplate();
console.log(value);
  return (
    <div className="App">
      <Template1Context.Provider value={value}>
        <Navigation />
      </Template1Context.Provider>
    </div>
  );
}

export default App;
