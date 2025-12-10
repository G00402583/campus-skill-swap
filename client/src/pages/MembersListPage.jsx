import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiClient from "../api/apiClient.js";

function MembersListPage() {
  const [members, setMembers] = useState([]);
  const [courseFilter, setCourseFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [skillFilter, setSkillFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function loadMembers() {
    try {
      setIsLoading(true);
      const params = {};
      if (courseFilter) params.courseName = courseFilter;
      if (yearFilter) params.studyYear = yearFilter;
      if (skillFilter) params.skill = skillFilter;

      const response = await apiClient.get("/members", { params });
      setMembers(response.data);
    } catch (error) {
      console.error("Failed to load members", error);
      setMembers([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadMembers();
  }, []);

  return (
    <div>
      <h1 className="page-title">Browse student members</h1>
      <p className="page-subtitle">
        Find other students by course, study year, or skills and view their
        offers.
      </p>

      <div className="filters-card">
        <div className="filters-header">
          <h2 className="filters-title">Filter members</h2>
          <span className="filters-hint">
            Use any combination of filters to narrow the list.
          </span>
        </div>

        <div className="filters-grid">
          <div className="filter-field">
            <label className="filter-label">Course</label>
            <input
              type="text"
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value)}
              placeholder="e.g. Computing, Business..."
              className="filter-input"
            />
          </div>
          <div className="filter-field">
            <label className="filter-label">Study year</label>
            <input
              type="number"
              min="1"
              max="6"
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="filter-input"
            />
          </div>
          <div className="filter-field">
            <label className="filter-label">Skill</label>
            <input
              type="text"
              value={skillFilter}
              onChange={(e) => setSkillFilter(e.target.value)}
              placeholder="e.g. fitness, web, maths"
              className="filter-input"
            />
          </div>
        </div>

        <button onClick={loadMembers} className="button-primary">
          Apply member filters
        </button>
      </div>

      {isLoading ? (
        <p className="empty-state">Loading members...</p>
      ) : members.length === 0 ? (
        <p className="empty-state">
          No members match these filters. Try clearing them or create a new
          offer so your profile appears here.
        </p>
      ) : (
        <ul className="members-list">
          {members.map((member) => (
            <li key={member._id} className="member-card">
              <div className="member-header">
                <h2 className="member-name">{member.fullName}</h2>
                <span className="member-course">
                  {member.courseName}, year {member.studyYear}
                </span>
              </div>

              {member.bioText && (
                <p className="member-bio">
                  {member.bioText.length > 140
                    ? member.bioText.slice(0, 140) + "..."
                    : member.bioText}
                </p>
              )}

              {member.skills && member.skills.length > 0 && (
                <div className="member-skills-row">
                  {member.skills.map((skill) => (
                    <span key={skill} className="tag-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <div className="member-actions">
                <Link
                  to={`/members/${member._id}`}
                  className="link-quiet member-view-link"
                >
                  View profile & offers
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MembersListPage;
