import AppHeader from "../appHeader/AppHeader";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MainPage, ComicsPage, SingleComicPage } from "../pages";

const App = () => {
  return (
    <div className="app">
      <Router>
        <AppHeader />
        <main>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/comics/:comicId" exact>
            <SingleComicPage />
          </Route>
          <Route path="/comics" exact>
            <ComicsPage />
          </Route>
        </main>
      </Router>
    </div>
  );
};

export default App;
