import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiClient from "../api/apiClient.js";

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
      console.error("Failed to load offers", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadOffers();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Available Skill Offers</h1>

      <section className="mb-4 border rounded-lg p-4 bg-white">
        <h2 className="font-medium mb-2">Filter offers</h2>
        <div className="flex flex-wrap gap-3 items-end">
          <div className="flex flex-col">
            <label className="text-sm mb-1">Skill tag</label>
            <input
              type="text"
              value={skillFilter}
              onChange={(e) => setSkillFilter(e.target.value)}
              placeholder="e.g. fitness, web, maths"
              className="border rounded px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1">Min price</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="border rounded px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1">Max price</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border rounded px-2 py-1"
            />
          </div>
          <label className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              checked={onlyActive}
              onChange={(e) => setOnlyActive(e.target.checked)}
            />
            Only active offers
          </label>
          <button
            onClick={loadOffers}
            className="mt-4 px-4 py-2 rounded bg-slate-900 text-white"
          >
            Apply filters
          </button>
        </div>
      </section>

      {isLoading ? (
        <p>Loading offers...</p>
      ) : offers.length === 0 ? (
        <p>No offers found. Try adjusting filters or create a new offer.</p>
      ) : (
        <ul className="space-y-3">
          {offers.map((offer) => (
            <li
              key={offer._id}
              className="border rounded-lg p-4 bg-white flex flex-col gap-1"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{offer.title}</h2>
                <span className="text-sm">
                  {offer.rateType === "free"
                    ? "Free"
                    : offer.priceValue
                    ? `${offer.priceValue} / ${
                        offer.rateType === "per_hour" ? "hour" : "project"
                      }`
                    : "Contact for price"}
                </span>
              </div>
              <p className="text-sm text-slate-700">{offer.descriptionText}</p>
              <p className="text-xs text-slate-500">
                Skill tag: <span className="font-medium">{offer.skillTag}</span>
              </p>
              {offer.memberId && (
                <p className="text-xs text-slate-500">
                  By{" "}
                  <Link
                    to={`/members/${offer.memberId._id}`}
                    className="underline"
                  >
                    {offer.memberId.fullName}
                  </Link>{" "}
                  ({offer.memberId.courseName}, year {offer.memberId.studyYear})
                </p>
              )}
              <div className="mt-2 flex gap-3 text-sm">
                <Link
                  to={`/offers/${offer._id}`}
                  className="text-slate-900 underline"
                >
                  View details
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OffersListPage;
