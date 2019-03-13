import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";

function Hero(props) {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
}

function Turn({ author, books, highlight, onAnwserSelected }) {
  function hightlightBgColor(highlight) {
    const mapping = {
      none: "",
      correct: "green",
      wrong: "red"
    };
    return mapping[highlight];
  }

  return (
    <div
      className="row turn"
      style={{ backgroundColor: hightlightBgColor(highlight) }}
    >
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="author" />
      </div>
      <div className="col-6">
        {books.map(title => (
          <Book title={title} key={title} onClick={onAnwserSelected} />
        ))}
      </div>
    </div>
  );
}

function Book({ title, onClick }) {
  return (
    <div className="answer" onClick={onClick({ title })}>
      <h4>{title}</h4>
    </div>
  );
}

function Continue() {
  return <div />;
}

function Footer() {
  return (
    <div id="footer" className="row">
      <p className="text-muted credit">
        All images are from
        <a href="http://commons.wikimedia.org/wiki/Main_Page">
          Wikemedia Commons
        </a>
        and are in the public domain
      </p>
    </div>
  );
}

function AuthorQuiz({ turnData, highlight, onAnwserSelected }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn
        {...turnData}
        highlight={highlight}
        onAnwserSelected={onAnwserSelected}
      />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
