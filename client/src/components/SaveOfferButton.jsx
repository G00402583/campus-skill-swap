import { useEffect, useState } from "react";
import { isOfferSaved, toggleOfferSaved } from "../utils/savedOffers.js";

function SaveOfferButton({ offerId }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (offerId) {
      setSaved(isOfferSaved(offerId));
    }
  }, [offerId]);

  function handleClick(event) {
    event.preventDefault();
    const next = toggleOfferSaved(offerId);
    setSaved(next);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={saved ? "button-secondary" : "button-ghost"}
    >
      {saved ? "Saved" : "Save offer"}
    </button>
  );
}

export default SaveOfferButton;
