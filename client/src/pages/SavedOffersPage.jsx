import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiClient from "../api/apiClient.js";
import { getSavedOfferIds } from "../utils/savedOffers.js";
import SaveOfferButton from "../components/SaveOfferButton.jsx";

function SavedOffersPage() {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function loadSavedOffers() {
    const savedIds = getSavedOfferIds();
    if (!savedIds.length) {
      setOffers([]);
      return;
    }

    try {
      setIsLoading(true);
      const response = await apiClient.get("/offers");
      const allOffers = response.data;
      const filtered = allOffers.filter((offer) =>
        savedIds.includes(offer._id)
      );
      setOffers(filtered);
    } catch (error) {
      setOffers([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadSavedOffers();
  }, []);

  return (
    <div>
      <h1 className="page-title">Saved offers</h1>
      <p className="page-subtitle">
        These are the offers you have marked as saved on this device.
      </p>

      {isLoading ? (
        <p className="empty-state">Loading saved offers...</p>
      ) : offers.length === 0 ? (
        <p className="empty-state">
          You have no saved offers yet. Go to Browse offers and click
          "Save offer" on any listing you want to remember.
        </p>
      ) : (
        <ul className="offers-list">
          {offers.map((offer) => (
            <li key={offer._id} className="offer-card">
              <div className="offer-header">
                <h2 className="offer-title">{offer.title}</h2>
                <span className="offer-price">
                  {offer.rateType === "free"
                    ? "Free"
                    : offer.priceValue
                    ? `${offer.priceValue} / ${
                        offer.rateType === "per_hour" ? "hour" : "project"
                      }`
                    : "Contact for price"}
                </span>
              </div>
              <p className="offer-description">{offer.descriptionText}</p>
              <div className="offer-meta-row">
                <span className="tag-pill">Tag: {offer.skillTag}</span>
                {offer.memberId && (
                  <span>
                    By{" "}
                    <Link
                      to={`/members/${offer.memberId._id}`}
                      className="link-quiet"
                    >
                      {offer.memberId.fullName}
                    </Link>{" "}
                    ({offer.memberId.courseName}, year{" "}
                    {offer.memberId.studyYear})
                  </span>
                )}
              </div>
              <div className="offer-actions">
                <Link
                  to={`/offers/${offer._id}`}
                  className="button-secondary"
                >
                  View details
                </Link>
                <SaveOfferButton offerId={offer._id} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedOffersPage;
