import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/surveys" exact component={Dashboard}></Route>
        <Route path="/surveys/new" component={SurveyNew}></Route>
      </BrowserRouter>
    </div>
  );
}
