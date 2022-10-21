import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { DotLoader } from "react-spinners";

const App = () => {
  const [IsLoading, setLodding] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLodding(true);
    }, 2000);
  });

  return (
    <Fragment>
      <Router>
        {IsLoading ? (
          <>
            <Switch>
              <Route exact path="/" component={LandingPage} />
            </Switch>
          </>
        ) : (
          <div
            className="loder"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <DotLoader
              size={50}
              thickness={100}
              color="rgba(98, 59, 204, .7)"
            />
          </div>
        )}
      </Router>
    </Fragment>
  );
};

export default App;
