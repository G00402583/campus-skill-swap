import { Link, useLocation } from "react-router-dom";

function MainLayout({ children }) {
  const location = useLocation();

  const isOffers = location.pathname.startsWith("/offers");
  const isMembers = location.pathname.startsWith("/members");
  const isCreate = location.pathname === "/offers/new";

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-inner">
          <Link to="/offers" className="brand">
            <div className="brand-mark">CS</div>
            <span className="brand-text">Campus Skill Swap</span>
          </Link>

          <nav className="app-nav">
            <Link
              to="/offers"
              className={
                "nav-link " + (isOffers && !isCreate ? "nav-link--active" : "")
              }
            >
              Browse offers
            </Link>
            <Link
              to="/offers/new"
              className={"nav-link " + (isCreate ? "nav-link--active" : "")}
            >
              Create offer
            </Link>
            <Link
              to="/members"
              className={"nav-link " + (isMembers ? "nav-link--active" : "")}
            >
              Browse members
            </Link>
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
