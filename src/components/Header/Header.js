import React, { useState } from "react";
import styles from "./style.module.css";

const Header = ({ title, logo, onLogout, onGenreSelect }) => {
  const genres = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Sci-Fi",
  ];

  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    onGenreSelect(genre);
  };

  return (
    <header className={styles.container}>
      <img src={logo} alt={title} />
      <h1>{title}</h1>
      <div className={styles.genreContainer}>
        {genres.map((genre, index) => (
          <button
            key={index}
            className={`${styles.genreButton} ${
              selectedGenre === genre ? styles.selected : ""
            }`}
            onClick={() => handleGenreSelect(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <button className={styles.logoutButton} onClick={onLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
