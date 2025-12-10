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
      setErrorMessage("Could not create offer. Please check your details.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <h1 className="page-title">Create a new skill offer</h1>
      <p className="page-subtitle">
        Share a skill you can help other students with and make it easy to find you.
      </p>

      <form onSubmit={handleSubmit} className="form-card">
        <section className="form-section">
          <h2 className="form-section-title">Your details</h2>
          <div className="form-grid-two">
            <div className="form-field">
              <label className="form-label">Full name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-field">
              <label className="form-label">Email address</label>
              <input
                type="email"
                required
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-field">
              <label className="form-label">Course name</label>
              <input
                type="text"
                required
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-field">
              <label className="form-label">Study year</label>
              <input
                type="number"
                min="1"
                max="6"
                required
                value={studyYear}
                onChange={(e) => setStudyYear(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Short bio</label>
            <textarea
              value={bioText}
              onChange={(e) => setBioText(e.target.value)}
              className="form-textarea"
              placeholder="Briefly describe yourself and how you like to work with people."
            />
          </div>
        </section>

        <section className="form-section">
          <h2 className="form-section-title">Offer details</h2>

          <div className="form-field">
            <label className="form-label">Offer title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
              placeholder="e.g. Gym coaching for beginners"
            />
          </div>

          <div className="form-field">
            <label className="form-label">Description</label>
            <textarea
              required
              value={descriptionText}
              onChange={(e) => setDescriptionText(e.target.value)}
              className="form-textarea"
              placeholder="Explain what you offer, how it works, and who it is best for."
            />
          </div>

          <div className="form-grid-two">
            <div className="form-field">
              <label className="form-label">Skill tag</label>
              <input
                type="text"
                required
                value={skillTag}
                onChange={(e) => setSkillTag(e.target.value)}
                className="form-input"
                placeholder="e.g. fitness, web, maths"
              />
            </div>

            <div className="form-field">
              <label className="form-label">Rate type</label>
              <select
                value={rateType}
                onChange={(e) => setRateType(e.target.value)}
                className="form-select"
              >
                <option value="per_hour">Per hour</option>
                <option value="per_project">Per project</option>
                <option value="free">Free</option>
              </select>
            </div>
          </div>

          {rateType !== "free" && (
            <div className="form-field">
              <label className="form-label">Price</label>
              <input
                type="number"
                min="0"
                required
                value={priceValue}
                onChange={(e) => setPriceValue(e.target.value)}
                className="form-input"
              />
              <span className="form-hint">Use whole numbers (euro).</span>
            </div>
          )}
        </section>

        {errorMessage && <p className="form-error">{errorMessage}</p>}

        <div className="form-actions">
          <button
            type="submit"
            disabled={isSubmitting}
            className="button-primary"
          >
            {isSubmitting ? "Creating offer..." : "Create offer"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewOfferPage;
