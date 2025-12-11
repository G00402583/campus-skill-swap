const STORAGE_KEY = "savedOfferIds";

function readFromStorage() {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch {
    return [];
  }
}

export function getSavedOfferIds() {
  return readFromStorage();
}

export function isOfferSaved(offerId) {
  const ids = readFromStorage();
  return ids.includes(offerId);
}

export function toggleOfferSaved(offerId) {
  const current = readFromStorage();
  let updated;
  if (current.includes(offerId)) {
    updated = current.filter((id) => id !== offerId);
  } else {
    updated = [...current, offerId];
  }
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return updated.includes(offerId);
}
