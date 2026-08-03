const project = {
    name: "SvelteKit Academy",
    client: "Marcus",
    completed: false,
    budget: 10000,
}

function displayProjectDetails(projectData) {
    console.log(`Title: ${projectData.name}`);
    console.log(`Client: ${projectData.client}`);
    console.log(`Completed: ${projectData.completed ? "Completed" : "In Progress"}`);
    console.log(`Budget: $${projectData.budget}`);
}

displayProjectDetails(project);