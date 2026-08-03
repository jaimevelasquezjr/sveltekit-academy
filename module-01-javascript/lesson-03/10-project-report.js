const projects = [
  {
    title: "Longwall Website",
    client: "Longwall Security",
    completed: false
  },
  {
    title: "Solution Search Website",
    client: "Marcus",
    completed: true
  },
  {
    title: "Intellipay Website",
    client: "Tony",
    completed: true
  }
];

function displayProject(projectList) {
    console.log(`Title: ${projectList.title}`);
    console.log(`Client: ${projectList.client}`);
    console.log(`Status: ${projectList.completed ? "Completed" : "Not Completed"}`);
    console.log(`=========================`);
}

displayProject(projects[0]);
displayProject(projects[1]);
displayProject(projects[2]);

/*

Title: Longwall Website
Client: Longwall Security
Status: Not Completed

*/