// JavaScript для сайта IT-отдела Белоярского колледжа
// Делаем: Бабкина Мария

// Когда страница загрузилась
window.onload = function () {
    console.log("Сайт загружен!");

    // Настраиваем слайдер проектов
    setupProjectsSlider();
};

// ========================================
// СЛАЙДЕР ПРОЕКТОВ
// ========================================

function setupProjectsSlider() {
    // Находим кнопки
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');

    // Находим элементы для отображения проекта
    const projectImageText = document.getElementById('project-image-text');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');
    const projectTech = document.getElementById('project-tech');

    // Находим элементы для номера проекта
    const currentProjectNum = document.getElementById('current-project');
    const totalProjectsNum = document.getElementById('total-projects');

    // Всего проектов у нас 2
    const totalProjects = 2;
    let currentProject = 1;

    // Показываем сколько всего проектов
    totalProjectsNum.textContent = totalProjects;
    currentProjectNum.textContent = currentProject;

    // Показываем первый проект при загрузке
    showProject(currentProject);

    // Когда нажимаем "назад"
    prevBtn.onclick = function () {
        if (currentProject > 1) {
            currentProject--;
        } else {
            currentProject = totalProjects; // переходим к последнему
        }
        currentProjectNum.textContent = currentProject;
        showProject(currentProject);
    };

    // Когда нажимаем "вперед"
    nextBtn.onclick = function () {
        if (currentProject < totalProjects) {
            currentProject++;
        } else {
            currentProject = 1; // переходим к первому
        }
        currentProjectNum.textContent = currentProject;
        showProject(currentProject);
    };

    // Функция для отображения проекта
    function showProject(projectNumber) {
        console.log("Показываем проект:", projectNumber);

        if (projectNumber === 1) {
            // Проект 1: Электронный журнал
            projectImageText.textContent = "Электронный журнал";
            projectTitle.textContent = "Электронный журнал";
            projectDescription.textContent = "Система для ведения электронного журнала успеваемости студентов";
            projectTech.innerHTML = '<strong>Технологии:</strong> HTML, CSS, JavaScript, PHP, MySQL';
        } else if (projectNumber === 2) {
            // Проект 2: Сайт колледжа
            projectImageText.textContent = "Сайт колледжа";
            projectTitle.textContent = "Сайт колледжа";
            projectDescription.textContent = "Обновленная версия официального сайта колледжа";
            projectTech.innerHTML = '<strong>Технологии:</strong> HTML, CSS, JavaScript, React<br>' +
                '<a href="https://bpkhmao.ru/" target="_blank" class="project-link">' +
                'Перейти на сайт →' +
                '</a>';
        }

        // Анимация смены проекта
        const card = document.querySelector('.project-card');
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    }
}

// ========================================
// ДОПОЛНИТЕЛЬНЫЕ ЭФФЕКТЫ
// ========================================

// Делаем плавную прокрутку при клике на ссылки в меню
document.querySelectorAll('nav a').forEach(link => {
    link.onclick = function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };
});

// Делаем анимацию при наведении на карточки команды
document.querySelectorAll('.team-card').forEach(card => {
    card.onmouseenter = function () {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s';
    };

    card.onmouseleave = function () {
        this.style.transform = 'scale(1)';
    };
});

// Простое сообщение в консоль
console.log("JavaScript для IT-портфолио готов!");
console.log("Разработчики: Бабкина Мария, Гапизова Зарина, Грищанович Кирилл");