// src/base.ts
function assertDefined(value, message) {
  if (value === null)
    throw new Error(message);
}

// src/crm.ts
var state = {
  stages: [
    "New Candidates",
    "Waiting for Reply",
    "Screening (recruiter)",
    "Test Task",
    "Interview (manager)",
    "Offer presentation",
    "Offer accepted",
    "Offer declined",
    "Candidate failed"
  ]
};
var root = document.getElementById("crm");
assertDefined(root, "Root must be defined");
root.className = "flex w-fit whitespace-nowrap bg-slate-200 overflow-x-scroll";
for (const stage of state.stages) {
  const _divStage = document.createElement("div");
  _divStage.className = "mr-3 h-screen w-48";
  {
    const __divTitle = document.createElement("div");
    __divTitle.className = "bg-white px-4 py-2 mb-2 rounded-sm shadow-md";
    __divTitle.innerText = stage;
    const __divBody = document.createElement("div");
    __divBody.className = "h-full bg-slate-50";
    _divStage.appendChild(__divTitle);
    _divStage.appendChild(__divBody);
  }
  root.appendChild(_divStage);
}
