import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/apiClient.js";

function NewOfferPage() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [courseName, setCourseName] = useState("");
  const [studyYear, setStudyYear] = useState("");
  const [bioText, setBioText] = useState("");

  const [title, setTitle] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [skillTag, setSkillTag] = useState("");
  const [rateType, setRateType] = useState("per_hour");
  const [priceValue, setPriceValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const memberPayload = {
        fullName,
        emailAddress,
        courseName,
        studyYear: Number(studyYear),
        bioText,
        skills: [skillTag],
      };

      const memberResponse = await apiClient.post("/members", memberPayload);
      const memberId = memberResponse.data._id;

      const offerPayload = {
        memberId,
        title,
        descriptionText,
        skillTag,
        rateType,
        priceValue: rateType === "free" ? null : Number(priceValue),
        isActive: true,
      };

      const offerResponse = await apiClient.post("/offers", offerPayload);
      navigate(`/offers/${offerResponse.data._id}`);
    } catch (error) {
      setErrorMessage("Could not create offer. Please check your input.");
      console.error("Failed to create offer", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Create a new skill offer</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-lg p-4 space-y-4 max-w-3xl"
      >
        <section>
          <h2 className="font-medium mb-2">Your details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label className="text-sm mb-1">Full name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="border rounded px-2 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1">Email address</label>
              <input
                type="email"
                required
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="border rounded px-2 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1">Course name</label>
              <input
                type="text"
                required
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                className="border rounded px-2 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1">Study year</label>
              <input
                type="number"
                min="1"
                max="6"
                required
                value={studyYear}
                onChange={(e) => setStudyYear(e.target.value)}
                className="border rounded px-2 py-1"
              />
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <label className="text-sm mb-1">Short bio</label>
            <textarea
              rows={3}
              value={bioText}
              onChange={(e) => setBioText(e.target.value)}
              className="border rounded px-2 py-1"
            />
          </div>
        </section>

        <section>
          <h2 className="font-medium mb-2">Offer details</h2>
          <div className="flex flex-col mb-3">
            <label className="text-sm mb-1">Offer title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Gym coaching for beginners"
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
              placeholder="Explain what you offer, how it works, and who it's for."
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
              placeholder="e.g. fitness, web, maths"
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
        </section>

        {errorMessage && (
          <p className="text-red-600 text-sm">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 rounded bg-slate-900 text-white disabled:opacity-60"
        >
          {isSubmitting ? "Creating offer..." : "Create offer"}
        </button>
      </form>
    </div>
  );
}

export default NewOfferPage;
