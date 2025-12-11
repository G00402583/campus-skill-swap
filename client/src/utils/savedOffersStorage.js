const STORAGE_KEY = "campusSkillSwap_savedOfferIds";

function readIds() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];
  } catch {
    return [];
  }
}

function writeIds(ids) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

export function getSavedOfferIds() {
  return readIds();
}

export function isOfferSaved(id) {
  const ids = readIds();
  return ids.includes(id);
}

export function toggleSavedOffer(id) {
  const ids = readIds();
  const exists = ids.includes(id);
  let next;
  if (exists) {
    next = ids.filter((existingId) => existingId !== id);
  } else {
    next = [...ids, id];
  }
  writeIds(next);
  return next;
}
