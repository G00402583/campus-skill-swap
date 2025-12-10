import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import apiClient from "../api/apiClient.js";

function EditOfferPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [skillTag, setSkillTag] = useState("");
  const [rateType, setRateType] = useState("per_hour");
  const [priceValue, setPriceValue] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function loadOffer() {
    try {
      setIsLoading(true);
      const response = await apiClient.get(`/offers/${id}`);
      const offer = response.data;
      setTitle(offer.title);
      setDescriptionText(offer.descriptionText);
      setSkillTag(offer.skillTag);
      setRateType(offer.rateType);
      setPriceValue(offer.priceValue ?? "");
      setIsActive(offer.isActive);
    } catch (error) {
      console.error("Failed to load offer for editing", error);
      setErrorMessage("Could not load this offer for editing.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadOffer();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const payload = {
        title,
        descriptionText,
        skillTag,
        rateType,
        priceValue: rateType === "free" ? null : Number(priceValue),
        isActive,
      };

      await apiClient.put(`/offers/${id}`, payload);
      navigate(`/offers/${id}`);
    } catch (error) {
      console.error("Failed to update offer", error);
      setErrorMessage("Could not update this offer. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isLoading) {
    return <p className="empty-state">Loading offer...</p>;
  }

  return (
    <div>
      <h1 className="page-title">Edit offer</h1>
      <p className="page-subtitle">
        Update the details of this skill offer. Changes are saved for everyone browsing the marketplace.
      </p>

      <form onSubmit={handleSubmit} className="detail-card">
        <div className="filter-field">
          <label className="filter-label">Offer title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="filter-input"
          />
        </div>

        <div className="filter-field">
          <label className="filter-label">Description</label>
          <textarea
            rows={4}
            required
            value={descriptionText}
            onChange={(e) => setDescriptionText(e.target.value)}
            className="filter-input"
          />
        </div>

        <div className="filter-field">
          <label className="filter-label">Skill tag</label>
          <input
            type="text"
            required
            value={skillTag}
            onChange={(e) => setSkillTag(e.target.value)}
            className="filter-input"
            placeholder="e.g. fitness, web, maths"
          />
        </div>

        <div className="detail-meta-grid">
          <div className="filter-field">
            <label className="filter-label">Rate type</label>
            <select
              value={rateType}
              onChange={(e) => setRateType(e.target.value)}
              className="filter-input"
            >
              <option value="per_hour">Per hour</option>
              <option value="per_project">Per project</option>
              <option value="free">Free</option>
            </select>
          </div>

          {rateType !== "free" && (
            <div className="filter-field">
              <label className="filter-label">Price</label>
              <input
                type="number"
                min="0"
                required
                value={priceValue}
                onChange={(e) => setPriceValue(e.target.value)}
                className="filter-input"
              />
            </div>
          )}

          <div className="checkbox-row">
            <input
              id="offer-active"
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
            />
            <label htmlFor="offer-active">Offer is active</label>
          </div>
        </div>

        {errorMessage && <p className="detail-error">{errorMessage}</p>}

        <div className="detail-actions">
          <button
            type="submit"
            disabled={isSubmitting}
            className="button-primary"
          >
            {isSubmitting ? "Saving..." : "Save changes"}
          </button>

          <Link to={`/offers/${id}`} className="button-ghost">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditOfferPage;
