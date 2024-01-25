<?php
// Include the database connection file
include '../config/db.php';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate and sanitize the form data
    $firstname = htmlspecialchars(trim($_POST['your-firstname']));
    $email = filter_var($_POST['your-email'], FILTER_VALIDATE_EMAIL);
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['your-message']));

    // Check for empty fields
    if (empty($firstname) || empty($email) || empty($subject) || empty($message)) {
        // Handle empty fields (you might want to redirect back with an error message)
        echo "Please fill in all fields.";
        exit;
    }

    // Insert the form data into the database (modify as needed)
    $query = "INSERT INTO contact_forms (firstname, email, subject, message, submission_date) VALUES (?, ?, ?, ?, NOW())";
    $params = array($firstname, $email, $subject, $message);

    $result = executeQuery($query, $params);

    if ($result) {
        // Data inserted successfully, you can redirect or perform additional actions
        echo "Form submitted successfully!";
    } else {
        // Handle database error
        echo "Error submitting form. Please try again.";
    }


} else {
    // Redirect or handle the case where the form is not submitted
    header("Location: ../contact/index.php");
    exit;
}
?>
