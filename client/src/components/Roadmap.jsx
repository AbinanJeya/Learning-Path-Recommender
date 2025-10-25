import React from "react";



export default function Roadmap({ data, loading }) {
  if (loading) return <p className="small">Asking AI for your roadmap…</p>;
  if (!data) return <p className="small">Enter a role and click Generate.</p>;

  const save = () => {
    const savedPlans = JSON.parse(localStorage.getItem("savedPlans") || "[]");

    const newPlan = {
      id: Date.now(),
      career: data.career,
      summary: data.summary,
      phases: (data.phases || []).map((p) => ({
        ...p,
        resources: (p.resources || []).map((r) => ({
          ...r,
          completed: false,
        })),
      })),
      savedAt: new Date().toLocaleString(),
    };

    savedPlans.unshift(newPlan);
    localStorage.setItem("savedPlans", JSON.stringify(savedPlans));
    alert("Plan saved to My Plans!");
  };

  return (
    <div>
      {data.summary && <p className="small">{data.summary}</p>}
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div className="small">
          Career: <strong>{data.career || "—"}</strong>
        </div>
        <button className="btn" onClick={save}>
          Save plan
        </button>
      </div>
      <div style={{ marginTop: 12 }}>
        {(data.phases || []).map((ph, idx) => (
          <PhaseCard key={idx} phase={ph} index={idx + 1} />
        ))}
        {(!data.phases || data.phases.length === 0) && (
          <p className="small">No phases returned.</p>
        )}
      </div>
    </div>
  );
}

function PhaseCard({ phase, index }) {
  const [open, setOpen] = React.useState(true);

  return (
    <div
      className="card"
      style={{
        marginBottom: 12,
        background: "#0f1630",
        border: "1px solid #2b335a",
      }}
    >
      <div className="row" style={{ justifyContent: "space-between" }}>
        <h4 style={{ margin: 0 }}>
          Phase {index}: {phase.title} •{" "}
          <span className="small">{phase.durationWeeks} weeks</span>
        </h4>
        <button className="btn" onClick={() => setOpen(!open)}>
          {open ? "Collapse" : "Expand"}
        </button>
      </div>

      {open && (
        <div style={{ marginTop: 10 }}>
          <div style={{ marginBottom: 8 }}>
            <div className="small">Skills</div>
            <div>
              {(phase.skills || []).map((s, i) => (
                <span className="badge" key={i}>
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="small">Resources</div>
            <ul>
              {(phase.resources || []).map((r, i) => (
                <li key={i}>
                  <a
                    href={r.link}
                    target="_blank"
                    rel="noreferrer"
                    className="resource-link"
                  >
                    {r.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
