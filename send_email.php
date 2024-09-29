/**
 * This is still work in progress.
 */

<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);
    $subject = "Contact Form Submission from $name";

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit();
    }

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;

        // Temporarily hardcode the email credentials to verify functionality
        $mail->Username = 'your_email@gmail.com'; // Replace with your Gmail username
        $mail->Password = 'your_password'; // Replace with your Gmail app-specific password

        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Disable SMTP debugging for production
        $mail->SMTPDebug = 0;  // Set to 0 for production

        //Recipients
        $mail->setFrom('noreply@example.com', 'Website Contact Form'); // Verified email
        $mail->addAddress('dave@example.com', 'Dave'); // Recipient email

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = nl2br(htmlspecialchars($message)); // Sanitize input

        // Send the email
        if ($mail->send()) {
            header("Location: sent.html");
            exit();
        } else {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request method.";
}
