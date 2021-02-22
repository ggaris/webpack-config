import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
const Home = lazy(() => import("pages/Home"));
const ShowCode = lazy(() => import("pages/ShowCode"));

const App = () => {
  return (
    <div className="app">
      <Router>
        <Suspense fallback={<div>LoaDing...</div>}>
          <Link to="showcode">3</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/showcode" component={ShowCode} />
            <Route exact path="/" component={ShowCode} />
            <div>启动成功✌</div>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
