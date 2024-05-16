import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import Footer from "./components/Footer/Footer";
import {
  Originals,
  Actions,
  ComedyMovies,
  HorrorMovies,
  RomanceMovies,
  Documentaries,
} from "./urls";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={Originals} title="Trending" />
      <RowPost url={Actions} title="Action" isSmall />
      <RowPost url={ComedyMovies} title="Comedy" isSmall />
      <RowPost url={HorrorMovies} title="Horror" isSmall />
      <RowPost url={RomanceMovies} title="Romance" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
      <Footer />
    </div>
  );
}

export default App;
