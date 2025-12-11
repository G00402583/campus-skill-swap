import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function MainLayout({ children }) {
  const location = useLocation();

  const isOffers = location.pathname.startsWith("/offers");
  const isMembers = location.pathname.startsWith("/members");
  const isCreate = location.pathname === "/offers/new";
  const isSaved = location.pathname === "/saved";


  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-inner">
          <Link to="/offers" className="brand">
            <div className="brand-mark">CS</div>
            <span className="brand-text">Campus Skill Swap</span>
          </Link>

          <nav className="app-nav">
            <Link to="/offers" className={"nav-link " + (isOffers && !isCreate ? "nav-link--active" : "")}>
              Browse offers
            </Link>

            <Link to="/offers/new" className={"nav-link " + (isCreate ? "nav-link--active" : "")}>
              Create offer
            </Link>

            <Link to="/saved" className={"nav-link " + (isSaved ? "nav-link--active" : "")}>
              Saved offers
            </Link>

            <Link to="/members" className={"nav-link " + (isMembers ? "nav-link--active" : "")}>
              Browse members
            </Link>

            {}
            <button onClick={toggleTheme} className="theme-toggle-btn">
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
          </nav>
        </div>
      </header>

      <main className="page-container">{children}</main>

      <footer className="app-footer">
        Campus Skill Swap · Built with the MERN stack
      </footer>
    </div>
  );
}

export default MainLayout;
