import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Notes from "./components/notes";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Notes />
    </div>
  );
}
