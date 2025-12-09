import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import apiClient from "../api/apiClient.js";

function MemberProfilePage() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [offers, setOffers] = useState([]);
  const [isLoadingMember, setIsLoadingMember] = useState(false);
  const [isLoadingOffers, setIsLoadingOffers] = useState(false);

  async function loadMember() {
    try {
      setIsLoadingMember(true);
      const response = await apiClient.get(`/members/${id}`);
      setMember(response.data);
    } catch (error) {
      console.error("Failed to load member", error);
    } finally {
      setIsLoadingMember(false);
    }
  }

  async function loadOffers() {
    try {
      setIsLoadingOffers(true);
      const response = await apiClient.get("/offers", {
        params: { memberId: id },
      });
      setOffers(response.data);
    } catch (error) {
      console.error("Failed to load offers for member", error);
    } finally {
      setIsLoadingOffers(false);
    }
  }

  useEffect(() => {
    loadMember();
    loadOffers();
  }, [id]);

  if (isLoadingMember) {
    return <p>Loading member...</p>;
  }

  if (!member) {
    return <p>Member not found.</p>;
  }

  return (
    <div>
      <section className="bg-white border rounded-lg p-4 mb-4">
        <h1 className="text-2xl font-semibold mb-1">{member.fullName}</h1>
        <p className="text-sm mb-1">
          {member.courseName}, year {member.studyYear}
        </p>
        <p className="text-sm mb-1">Email: {member.emailAddress}</p>
        {member.bioText && (
          <p className="text-sm mt-2 text-slate-700">{member.bioText}</p>
        )}
        {member.skills && member.skills.length > 0 && (
          <p className="text-xs mt-2 text-slate-500">
            Skills: {member.skills.join(", ")}
          </p>
        )}
      </section>

      <section className="bg-white border rounded-lg p-4">
        <h2 className="text-xl font-medium mb-2">Offers by this member</h2>
        {isLoadingOffers ? (
          <p>Loading offers...</p>
        ) : offers.length === 0 ? (
          <p>No offers found for this member.</p>
        ) : (
          <ul className="space-y-2">
            {offers.map((offer) => (
              <li key={offer._id} className="border rounded p-3">
                <Link
                  to={`/offers/${offer._id}`}
                  className="font-semibold underline"
                >
                  {offer.title}
                </Link>
                <p className="text-sm text-slate-700">
                  {offer.descriptionText.slice(0, 120)}...
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default MemberProfilePage;
