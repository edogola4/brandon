// js/main.js
fetch('db.json')
    .then(response => response.json())
    .then(data => {
        // Populate welcome section
        document.getElementById("welcome-title").textContent = data.welcome.title;
        document.getElementById("welcome-intro").textContent = data.welcome.intro;

        // Container for the slides
        const slidesContainer = document.getElementById("slides");

        // Function to create a slide element
        function createSlide(slide) {
            const slideDiv = document.createElement("div");
            slideDiv.classList.add("slide");

            // Set background image for the slide
            slideDiv.style.backgroundImage = `url(${slide.links.image})`;

            const slideInfo = document.createElement("div");
            slideInfo.classList.add("slide-info");

            // Project name
            const title = document.createElement("h3");
            title.textContent = slide.name;

            // Project description
            const description = document.createElement("p");
            description.textContent = slide.desc;

            // Technologies used
            const techStack = document.createElement("p");
            techStack.classList.add("technologies");
            techStack.textContent = `Technologies: ${slide.technologies}`;

            // View and code links
            const viewLink = document.createElement("a");
            viewLink.href = slide.links.view;
            viewLink.textContent = "View Project";
            viewLink.target = "_blank";
            viewLink.classList.add("slide-link");

            const codeLink = document.createElement("a");
            codeLink.href = slide.links.code;
            codeLink.textContent = "";
            codeLink.target = "_blank";
            codeLink.classList.add("slide-link");

            // Append elements to slide info and slide div
            slideInfo.appendChild(title);
            slideInfo.appendChild(description);
            slideInfo.appendChild(techStack);
            slideInfo.appendChild(viewLink);
            slideInfo.appendChild(codeLink);
            slideDiv.appendChild(slideInfo);
            slidesContainer.appendChild(slideDiv);
        }

        // Display the first 4 slides only
        data.slides.slice(0, 4).forEach(createSlide);
    })
    .catch(error => console.error("Error loading data:", error));
