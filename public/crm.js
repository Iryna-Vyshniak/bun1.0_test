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
    "Screening (recruiter)"
  ]
};
var root = document.getElementById("crm");
assertDefined(root, "Root must be defined");
root.className = "flex bg-slate-200";
for (const stage of state.stages) {
  const _div = document.createElement("div");
  _div.className = "h-screen  mr-2";
  {
    const __divTitle = document.createElement("div");
    __divTitle.className = "bg-white px-4 py-2 mb-2 rounded-sm shadow-md";
    __divTitle.innerText = stage;
    const __divBody = document.createElement("div");
    __divBody.className = "h-full bg-slate-50";
    _div.appendChild(__divTitle);
    _div.appendChild(__divBody);
  }
  root.appendChild(_div);
}
