const form = document.getElementById("search-form");
const resultsContainer = document.querySelector("#results");


// Here you would make an API call to get the search results
  // and then display them in

  const results = [
    {
      title: "Front-end Developer",
      company: "Acme Inc.",
      location: "New York, NY",
      applyUrl: "https://www.example.com/apply",
    },
    {
      title: "Full-stack Developer",
      company: "XYZ Corp.",
      location: "San Francisco, CA",
      applyUrl: "https://www.example.com/apply",
    },
    {
      title: "UI Designer",
      company: "ABC Company",
      location: "Los Angeles, CA",
      applyUrl: "https://www.example.com/apply",
    },
  ];

filterResults("","")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const keywords = form.elements["keywords"].value;
  const location = form.elements["location"].value;

  filterResults(keywords, location)
});

function filterResults(keywords, location){
  // Clear the results container
  resultsContainer.innerHTML = "";

  // Display each job result
  results.filter((result) => result.title.toLowerCase().includes(keywords) && result.location.toLowerCase().includes(location)).forEach((job) => {
    const jobDiv = document.createElement("div");
    jobDiv.classList.add("job");
    jobDiv.innerHTML = `
		<h2>${job.title}</h2>
		<p>${job.company} - ${job.location}</p>
		<a href="${job.applyUrl}" class="apply-btn">Apply</a>
	`;
    resultsContainer.appendChild(jobDiv);
  });
}
