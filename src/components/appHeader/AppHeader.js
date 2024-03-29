import { Link, NavLink } from "react-router-dom";
import "./appHeader.scss";

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink to="/" activeStyle={{color: '#9F0013'}} exact>  Characters</NavLink>
          </li>
          /
          <li>
            <NavLink to="/comics" activeStyle={{color: '#9F0013'}} >Comics</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
