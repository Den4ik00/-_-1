// Дані учасників
const participants = [
    {
        id: 1,
        name: "Іван Петров",
        email: "ivan.petrov@example.com",
        phone: "+380123456789",
        event: "Туристичний похід"
    },
    {
        id: 2,
        name: "Олена Коваленко",
        email: "olena.kovalenko@example.com",
        phone: "+380987654321",
        event: "Байдарки"
    },
    {
        id: 3,
        name: "Андрій Шевченко",
        email: "andriy.shevchenko@example.com",
        phone: "+380567890123",
        event: "Марафон"
    }
];

// Функція для відображення учасників у таблиці
function renderParticipants() {
    const tableBody = document.getElementById("participants-list");
    participants.forEach((participant, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${participant.name}</td>
            <td>${participant.email}</td>
            <td>${participant.phone}</td>
            <td>${participant.event}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Виклик функції для заповнення таблиці
document.addEventListener("DOMContentLoaded", renderParticipants);
