import { assertDefined } from "./base";

const state = {
    stages: [
        'New Candidates',
        'Waiting for Reply',
        'Screening (recruiter)',
    ]
}

const root = document.getElementById('crm') as HTMLElement | undefined;
assertDefined(root, 'Root must be defined')
root.className = 'flex bg-slate-200'

for (const stage of state.stages) {
    const _div = document.createElement('div');
    _div.className = 'h-screen  mr-2'
    // nested elements
    {
        const __divTitle = document.createElement('div');
        __divTitle.className = 'bg-white px-4 py-2 mb-2 rounded-sm shadow-md'
        __divTitle.innerText = stage;

        const __divBody = document.createElement('div');
        __divBody.className = 'h-full bg-slate-50'

        _div.appendChild(__divTitle);
        _div.appendChild(__divBody);
    }
    root.appendChild(_div);
}