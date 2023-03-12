import "./charList.scss";
import { useEffect, useState } from "react";
import MarvelService from "../../services/MarvelService";
import { PropTypes } from "prop-types";

const CharList = (props) => {
  const [char, setChar] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charEnded, setCharEnded] = useState(false);

  const marvelService = new MarvelService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = (offset) => {
    onCharListLoading();
    marvelService
      .getAllCharacters(offset)
      .then(onCharListLoaded)
      .catch(onCharError);
  };

  const onCharListLoading = () => {
    setNewItemLoading(true);
  };

  const onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }
    setChar((char) => [...char, ...newCharList]);
    setLoading((loading) => false);
    setNewItemLoading((newItemLoading) => false);
    setOffset((offset) => offset + 9);
    setCharEnded((charEnded) => ended);
  };

  const onCharError = () => {
    setLoading(false);
    setError(true);
  };
  return (
    <div className="char__list">
      <ul className="char__grid">
        {char.map((item, i) => {
          return (
            <li
              className="char__item"
              key={i}
              onClick={() => props.onCharSelected(item.id)}
            >
              <img src={item.thumbnail} alt="abyss" />
              <div className="char__name">{item.name}</div>
            </li>
          );
        })}
      </ul>
      <button
        className="button button__main button__long"
        disabled={newItemLoading}
        onClick={() => onRequest(offset)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};
CharList.propTypes = {
  onCharSelected: PropTypes.func,
};
export default CharList;
