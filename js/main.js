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

        // Display the first 3 slides only
        data.slides.slice(0, 3).forEach(createSlide);
    })
    .catch(error => console.error("Error loading data:", error));
