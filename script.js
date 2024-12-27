document.addEventListener("DOMContentLoaded", () => {
    const initalDiv = document.getElementById("initial");
    const informationsDiv = document.getElementById("informations");
    const button = document.getElementById("btn");
    const date = new Date().getHours();

    button.addEventListener("click", () => {
        initalDiv.style.display = "none";
        informationsDiv.style.display = "flex";
    })


    let time = "Boa noite";
    let color = "#8EF9F3";  

    if (date >= 0 && date < 12) {
        time = "Bom dia";
        color = "#FF9F1C";
    } else if (date > 12 && date < 18) {
        time = "Boa tarde";
        color = "#DE6449";
    } 

    // Update greeting message and its color
    const greeting = document.getElementById('greeting');
    greeting.textContent = time;
    greeting.style.color = color;
    greeting.style.textDecoration = "underline";
    greeting.style.textDecorationColor = color;
    greeting.style.textUnderlineOffset = "8px";

    // Update button style to match greeting color
    button.style.color = color;
    button.style.borderColor = color;
    button.style.backgroundColor = "transparent";

    // Add hover styles dynamically based on the color
    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = color;
        button.style.color = "white";
        button.style.borderColor = color;
    });

    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "transparent";
        button.style.color = color;
        button.style.borderColor = color;
    });


    // Handle projects cards displaying
    const academicProject = document.querySelector('#academic-projects')
    const personalProject = document.querySelector('#personal-projects')

    fetch("./assets/academic_projects.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((section) => {
            const sectionDiv = document. createElement('div');
            sectionDiv.classList.add('project-section');
            sectionDiv.innerHTML = `<h3>${section.section}</h3>`;

            const projectCardsDiv = document.createElement('div');
            projectCardsDiv.classList.add('project-cards');


            section.projects.forEach((project) => {
                const projectCard = document.createElement('div')
                projectCard.classList.add('project-card')
        
                projectCard.innerHTML = `
                <a href=${project.link} target="_blank" rel="noopener noreferrer"><img src=${project.image} alt=""></a>
                <div class="middle-message">
                    <div>
                        <h4>${project.title}</h4>
                    </div>
                    <p>
                        ${project.content}
                    </p>
                    <button class="project-card-btn">
                        <a href=${project.link} target="_blank" rel="noopener noreferrer">Acesse aqui!</a>
                    </button>
                </div>
                `
        
                projectCardsDiv.appendChild(projectCard)
            });

            sectionDiv.appendChild(projectCardsDiv);
            academicProject.appendChild(sectionDiv);

        })
        
    })
    .catch((error) => console.error("Error loading academic project data:", error));

    fetch("./assets/personal_projects.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((section) => {
            const sectionDiv = document. createElement('div');
            sectionDiv.classList.add('project-section');
            sectionDiv.innerHTML = `<h3>${section.section}</h3>`;

            const projectCardsDiv = document.createElement('div');
            projectCardsDiv.classList.add('project-cards');


            section.projects.forEach((project) => {
                const projectCard = document.createElement('div')
                projectCard.classList.add('project-card')
        
                projectCard.innerHTML = `
                <a href=${project.link} target="_blank" rel="noopener noreferrer"><img src=${project.image} alt=""></a>
                <div class="middle-message">
                    <div>
                        <h4>${project.title}</h4>
                    </div>
                    <p>
                        ${project.content}
                    </p>
                    <button class="project-card-btn">
                        <a href=${project.link} target="_blank" rel="noopener noreferrer">Acesse aqui!</a>
                    </button>
                </div>
                `
        
                projectCardsDiv.appendChild(projectCard)
            });

            sectionDiv.appendChild(projectCardsDiv);
            personalProject.appendChild(sectionDiv);

        })
        
    })
    .catch((error) => console.error("Error loading personal project data:", error));

});

const handleProjectCardDisplaying = () => {
    
}
    
