import styles from "./style.module.css";

const Header = ({ title, logo, onLogout }) => {
  return (
    <header className={styles.container}>
      <img src={logo} alt={title} />
      <h1>{title}</h1>
      <button className={styles.logoutButton} onClick={onLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
