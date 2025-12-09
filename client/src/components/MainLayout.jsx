import { Link, useLocation } from "react-router-dom";

function MainLayout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/offers" className="font-bold text-xl">
            Campus Skill Swap
          </Link>
          <nav className="flex gap-4">
            <Link
              to="/offers"
              className={
                location.pathname.startsWith("/offers") && !location.pathname.endsWith("/new")
                  ? "underline"
                  : ""
              }
            >
              Browse Offers
            </Link>
            <Link
              to="/offers/new"
              className={location.pathname.endsWith("/new") ? "underline" : ""}
            >
              Create Offer
            </Link>
          </nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
}

export default MainLayout;
