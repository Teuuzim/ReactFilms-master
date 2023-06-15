import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Header from "./Components/Header";
import {GlobalStyle} from "./css/styles"
import About from "./Pages/About";
import AllMovies from "./Pages/AllMovies";

export function AppRoutes() {
  return (
    <Router>
      <GlobalStyle />
      <Header onFormSubmit={onFormSubmit} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<AllMovies/>} />
      </Routes>
    </Router>
  );
}

function onFormSubmit() {
  return 0
}
