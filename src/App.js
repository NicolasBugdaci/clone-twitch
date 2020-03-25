import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Sidebar from "./Components/Sidebard/Sidebar.jsx";
import Games from "./Components/Games/Games.jsx";
import TopStreams from "./Components/TopStreams/TopStreams.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Live from "./Components/Live/Live.jsx";
import GameStreams from "./Components/GameStreams/GameStreams.jsx";
import Resultats from "./Components/Resultats/Resultats.jsx";
import Erreur from "./Components/Erreur/Erreur.jsx";

function App() {
  return (
    <Router forceRefresh={true}>
      <div className="App">
        <Header />
        <Sidebar />

        <Switch>
          <Route exact path="/" component={Games} />
          <Route exact path="/top-streams" component={TopStreams} />
          <Route exact path="/live/:slug" component={Live} />
          <Route exact path="/game/:slug" component={GameStreams} />
          <Route exact path="/resultats/:slug" component={Resultats} />
          <Route exact path="/resultats/" component={Erreur} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
