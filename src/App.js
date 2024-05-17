import { useEffect, useState } from "react";
import logo from "./assets/img/favicon.png";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Movie from "./components/Movie/Movie";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login.js";
import { getMovies } from "./api";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      getMovies("man").then((res) => setMovies(res.data.Search));
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Login onLogin={setIsLoggedIn} />;
  }

  return (
    <div className="app_container">
      <Header title="Movie Red" logo={logo} />
      <Search setMovies={setMovies} setLoading={setLoading} />
      <Movie movies={movies} loading={loading} />
      <hr />
      <Footer />
    </div>
  );
};

export default App;
