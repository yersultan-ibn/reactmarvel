import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from "../../resources/img/vision.png";
import { Component, useState } from "react";

const App = () => {
  const [charLoading, setCharLoading] = useState(false);

  const onCharSelected = (id) => {
    setCharLoading(id);
  };

  return (
    <div className="app">
      <AppHeader />
      <main>
        <RandomChar />
        <div className="char__content">
          <CharList onCharSelected={onCharSelected} />
          <CharInfo charId={charLoading} />
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
};

export default App;
