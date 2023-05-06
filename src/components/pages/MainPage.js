import CharInfo from "../charInfo/CharInfo";
import CharList from "../charList/CharList";
import RandomChar from "../randomChar/RandomChar";
import decoration from "../../resources/img/vision.png";
import { useState } from "react";

const MainPage = () => {
  const [newItemId, setNewItemId] = useState(null);

  const onCharSelected = (id) => {
    setNewItemId(id);
  };

  return (
    <>
      <RandomChar />
      <div className="char__content">
        <CharList onCharSelected={onCharSelected} />
        <CharInfo charId={newItemId} />
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};

export default MainPage;
