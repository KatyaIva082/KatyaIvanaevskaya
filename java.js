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
    modal.classList.remove('open'); // Скрываем модальное окно
});

// Закрытие модального окна при клике на фон
modal.querySelector('.modal__bg').addEventListener('click', () => {
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

    document.addEventListener("DOMContentLoaded", function() {
        const quotesList = document.querySelector(".quotes__list");
        const authorsDropdown = document.querySelector("#authors-dropdown");
        const randomQuotesButton = document.querySelector("#random-quotes-button");
        let authorsSet = new Set();
        let cachedQuotes = []; // Массив для сохранения загруженных цитат
    
        // Функция для загрузки 10 цитат одним запросом
        async function fetchBulkQuotes() {
            try {
                const response = await fetch("https://programming-quotesapi.vercel.app/api/bulk");
                if (!response.ok) {
                    throw new Error("Ошибка при загрузке цитат");
                }
                const quotes = await response.json();
                return quotes;
            } catch (error) {
                console.error("Ошибка при загрузке цитат:", error);
                return [];
            }
        }
    
        // Функция для загрузки и отображения 10 случайных цитат
        async function loadRandomQuotes() {
            quotesList.innerHTML = ""; // Очищаем список цитат
            authorsSet.clear();
            authorsDropdown.innerHTML = ""; // Очищаем список авторов
            cachedQuotes = []; // Сбрасываем кэшированные цитаты
    
            const quotes = await fetchBulkQuotes();
            cachedQuotes = quotes; // Сохраняем цитаты в кэш
    
            quotes.forEach(quote => {
                const listItem = document.createElement("li");
                listItem.classList.add("quotes__list-item");
                listItem.textContent = `"${quote.quote}" — ${quote.author}`;
                quotesList.appendChild(listItem);
    
                // Сохраняем автора
                authorsSet.add(quote.author);
            });
    
            // Обновляем выпадающий список авторов
            authorsSet.forEach(author => {
                const option = document.createElement("option");
                option.value = author;
                option.textContent = author;
                authorsDropdown.appendChild(option);
            });
        }
    
        // Функция для загрузки и отображения цитат определённого автора
        function loadQuotesByAuthor(author) {
            quotesList.innerHTML = ""; // Очищаем список цитат
            let authorQuotes = cachedQuotes.filter(quote => quote.author === author);
    
            if (authorQuotes.length === 0) {
                console.warn("Нет цитат для выбранного автора в кэше.");
                return;
            }
    
            authorQuotes.forEach(quote => {
                const listItem = document.createElement("li");
                listItem.classList.add("quotes__list-item");
                listItem.textContent = `"${quote.quote}" — ${quote.author}`;
                quotesList.appendChild(listItem);
            });
        }
    
        // Обработчик выбора автора из выпадающего списка
        authorsDropdown.addEventListener("change", function() {
            const selectedAuthor = authorsDropdown.value;
            if (selectedAuthor) {
                loadQuotesByAuthor(selectedAuthor);
            }
        });
    
        // Обработчик кнопки случайные цитаты
        randomQuotesButton.addEventListener("click", loadRandomQuotes);
    
        // Загрузка случайных цитат при загрузке страницы
        loadRandomQuotes();
});