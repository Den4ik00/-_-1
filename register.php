<?php
// Параметри для з'єднання з базою даних
$host = 'localhost';
$dbname = 'faynyy_lystopad';
$username = 'root';
$password = '';

// Підключення до бази даних
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Помилка з'єднання з базою даних: " . $e->getMessage());
}

// Отримання даних із форми
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$event = $_POST['event'] ?? '';

// Перевірка наявності даних
if (!empty($name) && !empty($email) && !empty($phone) && !empty($event)) {
    // Додавання даних у базу
    $stmt = $pdo->prepare("INSERT INTO registrations (name, email, phone, event) VALUES (:name, :email, :phone, :event)");
    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':phone' => $phone,
        ':event' => $event
    ]);

    echo "Дякуємо за реєстрацію, $name!";
} else {
    echo "Будь ласка, заповніть усі поля форми.";
}
?>
