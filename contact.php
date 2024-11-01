<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $errors = array();

    // Retrieve and sanitize input
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate name
    if (empty($name)) {
        $errors[] = "Please enter your name.";
    }

    // Validate email
    if (empty($email)) {
        $errors[] = "Please enter your email.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Please enter a valid email address.";
    }

    // Validate phone number
    if (empty($phone)) {
        $errors[] = "Please enter your phone number.";
    } elseif (!preg_match("/^[0-9]{10}$/", $phone)) {
        $errors[] = "Please enter a valid 10-digit phone number.";
    }

    // Validate message
    if (empty($message)) {
        $errors[] = "Please enter your message.";
    } elseif (strlen($message) < 10) {
        $errors[] = "Please enter a message of at least 10 characters.";
    }

    // If there are no errors, proceed to send the email
    if (empty($errors)) {
        $mail = new PHPMailer(true);
        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com'; // Set the SMTP server
            $mail->SMTPAuth = true;
            $mail->Username = 'your-email@gmail.com'; // SMTP username
            $mail->Password = 'your-email-password'; // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            // Recipients
            $mail->setFrom($email, $name);
            $mail->addAddress('brandon14ogola@gmail.com'); // Add a recipient

            // Content
            $mail->isHTML(false);
            $mail->Subject = "New Contact Form Submission from $name";
            $mail->Body = "You have received a new message from your website contact form.\n\n";
            $mail->Body .= "Here are the details:\n";
            $mail->Body .= "Name: $name\n";
            $mail->Body .= "Email: $email\n";
            $mail->Body .= "Phone: $phone\n";
            $mail->Body .= "Message:\n$message\n";

            $mail->send();
            echo "<h2>Thank you, $name! Your message has been sent.</h2>";
        } catch (Exception $e) {
            error_log("Mail error: {$mail->ErrorInfo}");
            echo "<h2>Sorry, there was a problem sending your message. Please try again later.</h2>";
        }
    } else {
        // Display validation errors
        echo "<h2>Oops! There were some issues with your submission:</h2>";
        echo "<ul>";
        foreach ($errors as $error) {
            echo "<li>$error</li>";
        }
        echo "</ul>";
    }
} else {
    // Redirect if the form is not submitted via POST
    header("Location: /your-contact-page.html");
    exit();
}
?>
