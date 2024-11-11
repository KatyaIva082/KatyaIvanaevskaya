// Получаем элементы
const addProjectBtn = document.getElementById('addProjectBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const okBtn = document.getElementById('okBtn');
const projectNameInput = document.getElementById('projectName');
const projectDescriptionInput = document.getElementById('projectDescription');
const projectImageUrlInput = document.getElementById('projectImageUrl');
const workSectionContent = document.querySelector('.work-section__content');

// Функция для открытия модального окна
addProjectBtn.addEventListener('click', (e) => {
    modal.classList.add('open'); // Показываем модальное окно
});

// Функция для закрытия модального окна
closeBtn.addEventListener('click', () => {
    modal.classList.add('close'); // Скрываем модальное окно
});

// Закрытие модального окна при клике на фон
modal.querySelector('.modal__bg').addEventListener('click', () => {
    modal.classList.remove('open'); // Скрываем модальное окно
});

// Закрытие модального окна при клике на крестик
modal.querySelector('.modal__wrap').addEventListener('click', () => {
    modal.classList.remove('open'); // Скрываем модальное окно
});

// Функция для обработки нажатия кнопки "Ок"
okBtn.addEventListener('click', () => {
    const projectName = projectNameInput.value;
    const projectDescription = projectDescriptionInput.value;
    const projectImageUrl = projectImageUrlInput.value;

    // Проверка на пустое значение
    if (projectName && projectDescription && projectImageUrl) {
        const newWork = document.createElement('div');
        newWork.classList.add('work');

        const workCount = workSectionContent.children.length;

        // Проверяем на нечетность
        if (workCount % 2 !== 0) {
            newWork.innerHTML = `
                <div class="work__info">
                    <h3 class="work__title">${projectName}</h3>
                    <p class="work__description">${projectDescription}</p>
                </div>
                <img src="${projectImageUrl}" alt="${projectName}" class="work__image">
            `;
        } else {
            newWork.innerHTML = `
                <img src="${projectImageUrl}" alt="${projectName}" class="work__image">
                <div class="work__info">
                    <h3 class="work__title">${projectName}</h3>
                    <p class="work__description">${projectDescription}</p>
                </div>
            `;
        }

        workSectionContent.appendChild(newWork); // Добавляем новый проект в секцию

        // Очищаем поля ввода
        projectNameInput.value = '';
        projectDescriptionInput.value = '';
        projectImageUrlInput.value = '';

        // Закрываем модальное окно
        modal.classList.remove('open');
    } else {
        alert("Пожалуйста, заполните все поля."); // Уведомление о необходимости заполнить поля
    }
});