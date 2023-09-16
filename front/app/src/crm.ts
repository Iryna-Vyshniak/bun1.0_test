import { assertDefined } from "./base";

const state = {
    stages: [
        'New Candidates',
        'Waiting for Reply',
        'Screening (recruiter)',
        'Test Task',
        'Interview (manager)',
        'Offer presentation',
        'Offer accepted',
        'Offer declined',
        'Candidate failed',
    ]
}

const root = document.getElementById('crm') as HTMLElement | undefined;
assertDefined(root, 'Root must be defined')
// use w-fit + whitespace-nowrap + overflow-x-scroll to make the div scrollable horizontally
root.className = 'flex w-fit whitespace-nowrap bg-slate-200 overflow-x-scroll'

for (const stage of state.stages) {
    const _divStage = document.createElement('div');
    _divStage.className = 'mr-3 h-screen w-48'
    // nested elements
    {
        const __divTitle = document.createElement('div');
        __divTitle.className = 'bg-white px-4 py-2 mb-2 rounded-sm shadow-md'
        __divTitle.innerText = stage;

        const __divBody = document.createElement('div');
        __divBody.className = 'h-full bg-slate-50'

        _divStage.appendChild(__divTitle);
        _divStage.appendChild(__divBody);
    }
    root.appendChild(_divStage);
}