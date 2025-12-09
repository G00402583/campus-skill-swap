import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
      setErrorMessage("Could not load offer.");
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
      setErrorMessage("Could not update offer.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isLoading) {
    return <p>Loading offer...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Edit offer</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-lg p-4 space-y-4 max-w-3xl"
      >
        <div className="flex flex-col mb-3">
          <label className="text-sm mb-1">Offer title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded px-2 py-1"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label className="text-sm mb-1">Description</label>
          <textarea
            rows={3}
            required
            value={descriptionText}
            onChange={(e) => setDescriptionText(e.target.value)}
            className="border rounded px-2 py-1"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label className="text-sm mb-1">Skill tag</label>
          <input
            type="text"
            required
            value={skillTag}
            onChange={(e) => setSkillTag(e.target.value)}
            className="border rounded px-2 py-1"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
          <div className="flex flex-col">
            <label className="text-sm mb-1">Rate type</label>
            <select
              value={rateType}
              onChange={(e) => setRateType(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="per_hour">Per hour</option>
              <option value="per_project">Per project</option>
              <option value="free">Free</option>
            </select>
          </div>
          {rateType !== "free" && (
            <div className="flex flex-col">
              <label className="text-sm mb-1">Price</label>
              <input
                type="number"
                min="0"
                required
                value={priceValue}
                onChange={(e) => setPriceValue(e.target.value)}
                className="border rounded px-2 py-1"
              />
            </div>
          )}
        </div>

        <label className="flex items-center gap-2 mb-3">
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
          Offer is active
        </label>

        {errorMessage && (
          <p className="text-red-600 text-sm">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 rounded bg-slate-900 text-white disabled:opacity-60"
        >
          {isSubmitting ? "Saving..." : "Save changes"}
        </button>
      </form>
    </div>
  );
}

export default EditOfferPage;
