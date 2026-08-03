const agency = {
    name: "Marcus Design Studio",
    website: "https://marcusdesignstudio.com",
    owner: "Marcus Johnson",
    yearsExperience: 10,
    services: [
        "UI Design",
        "Web Design",
        "WordPress",
        "Brand Identity",
        "SEO"
    ],

    featuredClient: {
        name: "Acme Corporation",
        country: "United States",
        project: "Website Redesign"
    }
};

console.log(`Agency Name: ${agency.name}`);
console.log(`Agency Owner: ${agency.owner}`);
console.log(`Second Service: ${agency.services[1]}`);
console.log(`Featured Client: ${agency.featuredClient.name}`);
console.log(`Featured Client Project: ${agency.featuredClient.project}`);
