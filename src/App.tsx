import React from "react";
import "./App.scss";
import ArticlesList from "./App/ArticlesList";
import Modal from "./shared/components/Modal";

function App() {
  return (
    <div className="app">
      <Modal />
      <h1>The Guardian</h1>
      <div className="description">
        You can see below the articles from the website : The Guardian
      </div>
      <ArticlesList />
    </div>
  );
}

export default App;
