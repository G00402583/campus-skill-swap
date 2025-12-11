import { Routes, Route, Navigate } from "react-router-dom";
import OffersListPage from "./pages/OffersListPage.jsx";
import NewOfferPage from "./pages/NewOfferPage.jsx";
import OfferDetailPage from "./pages/OfferDetailPage.jsx";
import EditOfferPage from "./pages/EditOfferPage.jsx";
import MemberProfilePage from "./pages/MemberProfilePage.jsx";
import MembersListPage from "./pages/MembersListPage.jsx";
import SavedOffersPage from "./pages/SavedOffersPage.jsx";
import MainLayout from "./components/MainLayout.jsx";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/offers" replace />} />

        <Route path="/offers" element={<OffersListPage />} />
        <Route path="/offers/new" element={<NewOfferPage />} />
        <Route path="/offers/:id" element={<OfferDetailPage />} />
        <Route path="/offers/:id/edit" element={<EditOfferPage />} />

        
        <Route path="/members" element={<MembersListPage />} />
        <Route path="/members/:id" element={<MemberProfilePage />} />

        
        <Route path="/saved" element={<SavedOffersPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
