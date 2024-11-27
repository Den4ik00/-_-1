// Дані про результати
const results = [
    { place: 1, name: "Іван Петров", event: "Марафон", year: 2023 },
    { place: 2, name: "Олена Коваленко", event: "Марафон", year: 2023 },
    { place: 3, name: "Андрій Шевченко", event: "Марафон", year: 2023 },
    { place: 1, name: "Марія Іваненко", event: "Байдарки", year: 2022 },
    { place: 2, name: "Олександр Ткаченко", event: "Байдарки", year: 2022 },
    { place: 3, name: "Катерина Лісова", event: "Байдарки", year: 2022 },
];

// Функція для відображення результатів у таблиці
function renderResults() {
    const tableBody = document.getElementById("results-list");
    results.forEach(result => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${result.place}</td>
            <td>${result.name}</td>
            <td>${result.event}</td>
            <td>${result.year}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Виклик функції для заповнення таблиці
document.addEventListener("DOMContentLoaded", renderResults);
