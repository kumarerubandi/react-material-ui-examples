import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Nav  from "./components/Nav"
import main  from "./pages/Main"



class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <div>
        <Nav />
          <Switch>
            <Route exact path={["/", "/main"]} component={main} />
            
          </Switch>
      </div>
    );
  }
}

export default App;