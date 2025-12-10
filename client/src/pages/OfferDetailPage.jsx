import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import apiClient from "../api/apiClient.js";

function OfferDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [offer, setOffer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function loadOffer() {
    try {
      setIsLoading(true);
      const response = await apiClient.get(`/offers/${id}`);
      setOffer(response.data);
    } catch (error) {
      setErrorMessage("Could not load this offer.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this offer?"
    );
    if (!confirmDelete) return;

    try {
      setIsDeleting(true);
      await apiClient.delete(`/offers/${id}`);
      navigate("/offers");
    } catch (error) {
      setErrorMessage("Could not delete this offer.");
      setIsDeleting(false);
    }
  }

  useEffect(() => {
    loadOffer();
  }, [id]);

  if (isLoading) {
    return <p className="empty-state">Loading offer...</p>;
  }

  if (!offer) {
    return <p className="empty-state">Offer not found.</p>;
  }

  return (
    <div className="detail-card">
      <h1 className="page-title">{offer.title}</h1>

      <p className="detail-main-text">{offer.descriptionText}</p>

      <div className="detail-meta-grid">
        <div>
          <p className="detail-label">Skill tag</p>
          <p className="detail-value tag-pill">{offer.skillTag}</p>
        </div>
        <div>
          <p className="detail-label">Rate</p>
          <p className="detail-value">
            {offer.rateType === "free"
              ? "Free"
              : offer.priceValue
              ? `${offer.priceValue} / ${
                  offer.rateType === "per_hour" ? "hour" : "project"
                }`
              : "Contact for price"}
          </p>
        </div>
        <div>
          <p className="detail-label">Created at</p>
          <p className="detail-value">
            {new Date(offer.createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      {offer.memberId && (
        <div className="detail-author">
          <p className="detail-label">Offered by</p>
          <p className="detail-value">
            <Link
              to={`/members/${offer.memberId._id}`}
              className="link-quiet"
            >
              {offer.memberId.fullName}
            </Link>{" "}
            ({offer.memberId.courseName}, year {offer.memberId.studyYear})
          </p>
        </div>
      )}

      {errorMessage && (
        <p className="detail-error">{errorMessage}</p>
      )}

      <div className="detail-actions">
        <Link to={`/offers/${id}/edit`} className="button-secondary">
          Edit offer
        </Link>

        <button
          type="button"
          onClick={handleDelete}
          disabled={isDeleting}
          className="button-danger"
        >
          {isDeleting ? "Deleting..." : "Delete offer"}
        </button>

        <Link to="/offers" className="button-ghost">
          Back to list
        </Link>
      </div>
    </div>
  );
}

export default OfferDetailPage;
