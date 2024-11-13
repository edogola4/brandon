function showProjects(projects) {
  // Limit the projects to the first three items
  const limitedProjects = projects.slice(0, 3);

  let projectsContainer = document.querySelector(".work .box-container");
  let projectsHTML = "";
  limitedProjects.forEach(project => {
      projectsHTML += `
      <div class="grid-item ${project.category}">
      <div class="box tilt" style="width: 380px; margin: 1rem">
        <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
        <div class="content">
          <div class="tag">
            <h3>${project.name}</h3>
          </div>
          <div class="desc">
            <p>${project.desc}</p>
            <div class="btns">
              <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
              <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
            </div>
          </div>
        </div>
      </div>
      </div>`;
  });

  projectsContainer.innerHTML = projectsHTML;

  // filter items on button click
  $('.button-group').on('click', 'button', function () {
      $('.button-group').find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
  });
}
