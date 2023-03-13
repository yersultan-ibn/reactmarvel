import AppHeader from "../appHeader/AppHeader";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MainPage, ComicsPage } from "../page";

const App = () => {
  return (
    <Router>
      <Switch>
        <div className="app">
          <AppHeader />
          <main>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/comics" exact>
              <ComicsPage />
            </Route>
          </main>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
