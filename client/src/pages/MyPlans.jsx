import React, { useState, useEffect } from "react";

export default function MyPlans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedPlans") || "[]");
    setPlans(saved);
  }, []);

  const toggleResource = (planId, phaseIndex, resourceIndex) => {
    const updatedPlans = plans.map((p) => {
      if (p.id === planId) {
        const updatedPhases = p.phases.map((phase, i) => {
          if (i === phaseIndex) {
            const updatedResources = phase.resources.map((r, j) =>
              j === resourceIndex ? { ...r, completed: !r.completed } : r
            );
            return { ...phase, resources: updatedResources };
          }
          return phase;
        });
        return { ...p, phases: updatedPhases };
      }
      return p;
    });
    setPlans(updatedPlans);
    localStorage.setItem("savedPlans", JSON.stringify(updatedPlans));
  };

  if (!plans.length)
    return <p className="text-center mt-8 text-gray-500">No saved plans yet.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Saved Learning Plans</h1>

      {plans.map((plan) => {
        const total = plan.phases.reduce(
          (a, p) => a + p.resources.length,
          0
        );
        const done = plan.phases.reduce(
          (a, p) => a + p.resources.filter((r) => r.completed).length,
          0
        );
        const progress = Math.round((done / total) * 100);

        return (
          <div key={plan.id} className="mb-8 border rounded-xl p-4 bg-[#0b1120]">
            <h2 className="text-xl font-semibold text-blue-400">
              {plan.career}
            </h2>
            <p className="text-sm text-gray-400 mb-2">
              Saved on {plan.createdAt}
            </p>
            <p className="text-gray-300 mb-4">{plan.summary}</p>

            <div className="mb-4">
              <p>Progress: {progress}%</p>
              <div className="h-2 bg-gray-700 rounded">
                <div
                  className="h-2 bg-green-500 rounded"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {plan.phases.map((phase, i) => (
              <div key={i} className="mb-4">
                <h3 className="text-lg font-semibold text-gray-200">
                  {phase.title}
                </h3>
                <ul className="ml-4 mt-2">
                  {phase.resources.map((r, j) => (
                    <li key={j} className="mb-1">
                      <label className="flex items-center gap-2 text-gray-300">
                        <input
                          type="checkbox"
                          checked={r.completed || false}
                          onChange={() => toggleResource(plan.id, i, j)}
                        />
                        <a
                          href={r.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resource-link"
                        >
                          {r.name}
                        </a>

                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
