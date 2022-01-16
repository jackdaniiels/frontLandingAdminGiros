import React, {  useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Navigation } from "./routes/Navigation";
// import "swiper/scss/bundle";
import { Template1Context } from "./context/Template1Context";
import { getDataTemplate1 } from "./services/getDataTemplate1";

interface dataModel {
  id: number;
  attribrutes: any;
}

function App() {

  const [dataTemplate, setData] = useState<dataModel>({
    id: 0,
    attribrutes: {},
  });

  useEffect(() => {
    getDataTemplate1().then((data) => {
      const { attributes } = data;
      setData(attributes);
    });
  }, []);

  return (
    <div className="App">
      <Template1Context.Provider value={{ template2: dataTemplate }}>
        <Navigation />
      </Template1Context.Provider>
    </div>
  );
}

export default App;
