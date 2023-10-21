import "./Style.css";
import React from "react";
// import Navbar from "./Nabar";
// import MainElement from "./Main";
function Header() {
  const reactIcon = "/image/logo192.png";
  const navBar = ["Home", "Contact", "About Us"];
  const navBarMap = navBar.map((k) => <li key={k}>{k}</li>);
  return (
    <header>
      <nav className="navBar">
        <img src={reactIcon} alt="react_icon" className="reactIcon" />{" "}
        <h3 className="react-icon-text">REACT ELEMENT</h3>
        <ul className="list">{navBarMap}</ul>
      </nav>
    </header>
  );
}
function List() {
  const items = ["mango", "mango", "mango", "mango", "mango", "mango", "mango"];
  const displayListItem = items.map((e) => (
    <li key={e} className="mango-list">
      {e}
    </li>
  ));

  return (
    <>
      <div className="background-image">
        <ul>{displayListItem}</ul>
      </div>
    </>
  );
}
function Footer() {
  return (
    <footer className="footer-container">
      <small>© 2023 Web design. All right reserved.</small>
    </footer>
  );
}
function Main() {
  return (
    <>
      <Header />
      <List />
      <Footer />
    </>
  );
}
export default Main;
