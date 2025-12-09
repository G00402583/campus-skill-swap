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
      console.error("Failed to load offer", error);
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
      console.error("Failed to delete offer", error);
      setErrorMessage("Could not delete this offer.");
      setIsDeleting(false);
    }
  }

  useEffect(() => {
    loadOffer();
  }, [id]);

  if (isLoading) {
    return <p>Loading offer...</p>;
  }

  if (!offer) {
    return <p>Offer not found.</p>;
  }

  return (
    <div className="bg-white border rounded-lg p-4 space-y-3">
      <h1 className="text-2xl font-semibold mb-2">{offer.title}</h1>
      <p className="mb-3 text-slate-700">{offer.descriptionText}</p>
      <p className="text-sm mb-1">
        Skill tag: <span className="font-medium">{offer.skillTag}</span>
      </p>
      <p className="text-sm mb-1">
        {offer.rateType === "free"
          ? "Free"
          : offer.priceValue
          ? `${offer.priceValue} / ${
              offer.rateType === "per_hour" ? "hour" : "project"
            }`
          : "Contact for price"}
      </p>
      {offer.memberId && (
        <p className="text-sm mb-2">
          Offered by{" "}
          <Link
            to={`/members/${offer.memberId._id}`}
            className="underline text-slate-900"
          >
            {offer.memberId.fullName}
          </Link>{" "}
          ({offer.memberId.courseName}, year {offer.memberId.studyYear})
        </p>
      )}
      <p className="text-xs text-slate-500">
        Created at {new Date(offer.createdAt).toLocaleString()}
      </p>

      {errorMessage && (
        <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
      )}

      <div className="mt-4 flex gap-3">
        <Link
          to={`/offers/${id}/edit`}
          className="px-3 py-2 rounded bg-slate-900 text-white text-sm"
        >
          Edit offer
        </Link>
        <button
          type="button"
          onClick={handleDelete}
          disabled={isDeleting}
          className="px-3 py-2 rounded bg-red-600 text-white text-sm disabled:opacity-60"
        >
          {isDeleting ? "Deleting..." : "Delete offer"}
        </button>
        <Link to="/offers" className="text-sm underline">
          Back to list
        </Link>
      </div>
    </div>
  );
}

export default OfferDetailPage;
