import "./App.css";
import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import NavBar from "./layout/NavBar";
import Spinner from "react-bootstrap/Spinner";
const PlanetsView = lazy(() => import("./views/PlanetsView"));
const PeopleView = lazy(() => import("./views/PeopleView"));
const StarshipsView = lazy(() => import("./views/StarshipsView"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <PlanetsView />
              </Suspense>
            }
          />
          <Route
            path="/people"
            element={
              <Suspense fallback={<Loading />}>
                <PeopleView />
              </Suspense>
            }
          />
          <Route
            path="/starships"
            element={
              <Suspense fallback={<Loading />}>
                <StarshipsView />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

const Navigation = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const Loading = () => {
  return (
    <div className="App">
      <Spinner animation="border" />
    </div>
  );
};

export default App;
