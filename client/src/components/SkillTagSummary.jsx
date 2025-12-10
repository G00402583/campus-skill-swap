import { useEffect, useState } from "react";
import apiClient from "../api/apiClient.js";

function SkillTagSummary() {
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function loadStats() {
    try {
      setIsLoading(true);
      const response = await apiClient.get("/offers/stats/skill-tags");
      setStats(response.data);
    } catch (error) {
      setStats([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <aside className="stats-card">
      <h2 className="stats-title">Popular skill tags</h2>
      {isLoading ? (
        <p className="page-subtitle">Loading...</p>
      ) : stats.length === 0 ? (
        <p className="page-subtitle">
          Create a few offers to see tag statistics.
        </p>
      ) : (
        <ul>
          {stats.map((item) => (
            <li key={item._id} className="stats-item">
              <span className="stats-tag">{item._id}</span>
              <span className="stats-count">{item.offerCount} offers</span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default SkillTagSummary;
