import "./singleComic.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

const SingleComic = (props) => {
  const { comicId } = useParams();

  const [comic, setComic] = useState([]);

  const { error, loading, getComic } = useMarvelService();

  useEffect(() => {
    updateComic();
  }, [comicId]);

  const updateComic = () => {
    getComic(comicId).then(onComicLoaded);
  };

  const onComicLoaded = (comic) => {
    setComic(comic);
  };
  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const content = !(loading || error) ? <View comic={comic} /> : null;
  return (
    <>
      {spinner}
      {errorMessage}
      {content}
    </>
  );
};

const View = ({ comic }) => {
  const { name, description, pageCount, thumbnail, language, price } = comic;

  return (
    <div className="single-comic">
      <img src={thumbnail} alt="x-men" className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{name}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount} pages</p>
        <p className="single-comic__descr">Language: {language}</p>
        <div className="single-comic__price">{price} $</div>
      </div>
      <Link to="/comics" className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};

export default SingleComic;
