// Данные проектов
const projects = [
    {
        title: "Электронный журнал",
        description: "Система для ведения электронного журнала успеваемости студентов",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        image: "project1.png"
    },
    {
        title: "Сайт колледжа",
        description: "Обновленная версия официального сайта колледжа",
        tech: ["HTML", "CSS", "JavaScript", "React"],
        image: "project2.png"
    },
    {
        title: "Мобильное приложение",
        description: "Приложение для студентов с расписанием и уведомлениями",
        tech: ["React Native", "Firebase", "JavaScript"],
        image: "project3.png"
    },
    {
        title: "Система тестирования",
        description: "Платформа для проведения онлайн-тестов и экзаменов",
        tech: ["Python", "Django", "PostgreSQL"],
        image: "project4.png"
    }
];

// Текущий слайд
let currentSlide = 0;

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    initProjectsSlider();
    initTeamToggle();
    initVisitCounter();
    updateProjectsDisplay();
});

// Инициализация слайдера проектов
function initProjectsSlider() {
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');
    const currentSlideEl = document.getElementById('current-slide');
    const totalSlidesEl = document.getElementById('total-slides');

    totalSlidesEl.textContent = projects.length;

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + projects.length) % projects.length;
        updateProjectsDisplay();
        updateSliderIndicator();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % projects.length;
        updateProjectsDisplay();
        updateSliderIndicator();
    });

    function updateSliderIndicator() {
        currentSlideEl.textContent = currentSlide + 1;
    }

    updateSliderIndicator();
}

// Обновление отображения проектов
function updateProjectsDisplay() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';

    // Показываем 2 проекта начиная с текущего слайда
    for (let i = 0; i < Math.min(2, projects.length); i++) {
        const projectIndex = (currentSlide + i) % projects.length;
        const project = projects[projectIndex];

        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <p>${project.title}</p>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    <strong>Технологии:</strong> ${project.tech.join(', ')}
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    }
}

// Инициализация кнопки показа/скрытия команды
function initTeamToggle() {
    const toggleBtn = document.getElementById('toggle-team');
    const teamContent = document.getElementById('team-content');
    const toggleText = toggleBtn.querySelector('span');
    const toggleIcon = toggleBtn.querySelector('i');

    toggleBtn.addEventListener('click', function () {
        teamContent.classList.toggle('hidden');

        if (teamContent.classList.contains('hidden')) {
            toggleText.textContent = 'Показать команду';
            toggleIcon.className = 'fas fa-chevron-down';
        } else {
            toggleText.textContent = 'Скрыть команду';
            toggleIcon.className = 'fas fa-chevron-up';
        }
    });
}

// Инициализация счетчика посещений
function initVisitCounter() {
    const visitCountEl = document.getElementById('visit-count');
    const visitTextEl = document.getElementById('visit-text');
    const resetBtn = document.getElementById('reset-counter');

   
    let visitCount = localStorage.getItem('portfolioVisits');

    if (visitCount === null) {
        visitCount = 0;
    } else {
        visitCount = parseInt(visitCount);
    }

    // Увеличиваем счетчик
    visitCount++;

    // Сохраняем в localStorage
    localStorage.setItem('portfolioVisits', visitCount);

    // Обновляем отображение
    updateVisitDisplay(visitCount);

    // Обработчик сброса счетчика
    resetBtn.addEventListener('click', function () {
        localStorage.setItem('portfolioVisits', 0);
        updateVisitDisplay(0);
    });

    function updateVisitDisplay(count) {
        visitCountEl.textContent = count;

        let text;
        if (count % 10 === 1 && count % 100 !== 11) {
            text = `${count} раз`;
        } else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
            text = `${count} раза`;
        } else {
            text = `${count} раз`;
        }

        visitTextEl.textContent = text;
    }}
