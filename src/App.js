import { useEffect, useState } from "react";
import logo from "./assets/img/favicon.png";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Movie from "./components/Movie/Movie";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login.js";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";
import { getMovies } from "./api";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      getMovies(selectedGenre || "man").then((res) =>
        setMovies(res.data.Search)
      );
    }
  }, [isLoggedIn, selectedGenre]);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    setIsLoggedIn(false);
    setMovies([]);
    setShowLogoutConfirm(false);
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  if (!isLoggedIn) {
    return <Login onLogin={setIsLoggedIn} />;
  }

  return (
    <div className="app_container">
      <Header
        title="Movie Red"
        logo={logo}
        onLogout={handleLogout}
        onGenreSelect={handleGenreSelect}
      />
      <Search setMovies={setMovies} setLoading={setLoading} />
      <Movie movies={movies} loading={loading} />
      <hr />
      <Footer />
      {showLogoutConfirm && (
        <ConfirmationModal
          message="Are you sure you want to log out?"
          onConfirm={confirmLogout}
          onCancel={cancelLogout}
        />
      )}
    </div>
  );
};

export default App;
