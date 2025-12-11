import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiClient from "../api/apiClient.js";
import SkillTagSummary from "../components/SkillTagSummary.jsx";
import SaveOfferButton from "../components/SaveOfferButton.jsx";

function OffersListPage() {
  const [offers, setOffers] = useState([]);
  const [skillFilter, setSkillFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [onlyActive, setOnlyActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  async function loadOffers() {
    try {
      setIsLoading(true);
      const params = {};
      if (skillFilter) params.skillTag = skillFilter;
      if (minPrice) params.minPrice = minPrice;
      if (maxPrice) params.maxPrice = maxPrice;
      if (onlyActive) params.isActive = true;
      const response = await apiClient.get("/offers", { params });
      setOffers(response.data);
    } catch (error) {
      setOffers([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadOffers();
  }, []);

  return (
    <div>
      <h1 className="page-title">Available Skill Offers</h1>
      <p className="page-subtitle">
        Browse services other students are offering on campus, or post your own.
      </p>

      <div className="filters-card">
        <div className="filters-header">
          <h2 className="filters-title">Filter offers</h2>
          <span className="filters-hint">Combine filters to narrow results.</span>
        </div>
        <div className="filters-grid">
          <div className="filter-field">
            <label className="filter-label">Skill tag</label>
            <input
              type="text"
              value={skillFilter}
              onChange={(e) => setSkillFilter(e.target.value)}
              placeholder="e.g. fitness, web, maths"
              className="filter-input"
            />
          </div>
          <div className="filter-field">
            <label className="filter-label">Min price</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="filter-input"
            />
          </div>
          <div className="filter-field">
            <label className="filter-label">Max price</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="filter-input"
            />
          </div>
        </div>
        <div className="checkbox-row">
          <input
            id="only-active"
            type="checkbox"
            checked={onlyActive}
            onChange={(e) => setOnlyActive(e.target.checked)}
          />
          <label htmlFor="only-active">Only active offers</label>
        </div>
        <button onClick={loadOffers} className="button-primary">
          Apply filters
        </button>
      </div>

      <div className="offers-layout">
        <section>
          {isLoading ? (
            <p className="empty-state">Loading offers...</p>
          ) : offers.length === 0 ? (
            <p className="empty-state">
              No offers match your filters. Try removing filters or create a new
              offer.
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
        </section>

        <SkillTagSummary />
      </div>
    </div>
  );
}

export default OffersListPage;
