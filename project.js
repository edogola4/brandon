fetch('db.json')
    .then(response => response.json())
    .then(data => {
        // Populate welcome section
        document.getElementById("welcome-title").textContent = data.welcome.title;
        document.getElementById("welcome-intro").textContent = data.welcome.intro;

        // Create slides
        const slidesContainer = document.getElementById("slides");
        const exploreMoreButton = document.querySelector(".explore-more");

        // Track the displayed slides
        let slidesDisplayed = 5;

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

        // Display the first 5 slides
        data.slides.slice(0, slidesDisplayed).forEach(createSlide);

        // Show more slides when "Explore More" is clicked
        exploreMoreButton.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent the link from navigating
            const remainingSlides = data.slides.slice(slidesDisplayed);
            remainingSlides.forEach(createSlide);
            exploreMoreButton.style.display = "none"; // Hide the button after showing all slides
        });
    })
    .catch(error => console.error("Error loading data:", error));


