// js/projects.js
fetch('db.json')
    .then(response => response.json())
    .then(data => {
        const slidesContainer = document.getElementById("projects-slides");

        // Function to create a slide element
        function createSlide(slide) {
            const slideDiv = document.createElement("div");
            slideDiv.classList.add("slide");
            slideDiv.style.backgroundImage = `url(${slide.image})`;

            const slideInfo = document.createElement("div");
            slideInfo.classList.add("slide-info");

            const title = document.createElement("h3");
            title.textContent = slide.title;

            const description = document.createElement("p");
            description.textContent = slide.description;

            const link = document.createElement("a");
            link.href = slide.link;
            link.textContent = "Learn more";
            link.classList.add("slide-link");

            slideInfo.appendChild(title);
            slideInfo.appendChild(description);
            slideInfo.appendChild(link);
            slideDiv.appendChild(slideInfo);
            slidesContainer.appendChild(slideDiv);
        }

        // Display all slides
        data.slides.forEach(createSlide);
    })
    .catch(error => console.error("Error loading data:", error));
