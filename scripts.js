const homeNavItem = document.getElementsByClassName('nav-item')[0];
const educationNavItem = document.getElementsByClassName('nav-item')[1];
const skillsNavItem = document.getElementsByClassName('nav-item')[2];
const projectsNavItem = document.getElementsByClassName('nav-item')[3];

const homeSection = document.getElementById('home');
const educationSection = document.getElementById('education');
const skillsSection = document.getElementById('skills');
const projectsSection = document.getElementById('projects');



const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= 10
        && rect.bottom >= 50
    );
};

window.addEventListener('scroll', () => {
    if (isInViewport(homeSection)) {
        homeNavItem.classList.add('active');
        educationNavItem.classList.remove('active');
        skillsNavItem.classList.remove('active');
        projectsNavItem.classList.remove('active');
        console.log('===  scripts.js [19] ===',);
    }
    if (isInViewport(educationSection)) {
        homeNavItem.classList.remove('active');
        educationNavItem.classList.add('active');
        skillsNavItem.classList.remove('active');
        projectsNavItem.classList.remove('active');
        console.log('===  scripts.js [25] ===',);
    } if (isInViewport(skillsSection)) {
        homeNavItem.classList.remove('active');
        educationNavItem.classList.remove('active');
        skillsNavItem.classList.add('active');
        projectsNavItem.classList.remove('active');
        console.log('===  scripts.js [31] ===',);
    } if (isInViewport(projectsSection)) {
        homeNavItem.classList.remove('active');
        educationNavItem.classList.remove('active');
        skillsNavItem.classList.remove('active');
        projectsNavItem.classList.add('active');
        console.log('===  scripts.js [37] ===',);
    }
});

const getRepo = async () => {
    const response = await fetch('https://api.github.com/users/Ashish-Sunil-Vaidya/repos');
    const data = await response.json();
    console.log('===  scripts.js [46] ===', data);
    return data;
}

// Display the repos
const displayRepos = async () => {

    const projects = document.getElementById('project-list');
    await getRepo().then((repos) => repos.map(repo => {
        const item = document.createElement('div');
        item.classList.add('projects-item');
        item.classList.add('card');
        item.innerHTML = `
        <div class="project-title">${repo.name}</div>
        <a class="project-repo-link" href="${repo.html_url}" target="_blank">
        Go to Repo  <i data-feather="external-link"></i>
        </a>
        `;
        projects.appendChild(item);
    }));

}

displayRepos();