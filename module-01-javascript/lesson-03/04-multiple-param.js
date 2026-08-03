function createProjectSummary(title, client, status) {
    return `${title} for ${client} is currently ${status}.`;
}

const summary = createProjectSummary("Acme Website Redesign", "Acme Corp", "in progress");

console.log(summary);