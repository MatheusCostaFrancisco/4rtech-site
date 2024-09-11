<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Configurações do servidor SMTP da HostGator
    $mail->isSMTP();
    $mail->Host = '4rtech.com.br';
    $mail->SMTPAuth = true;
    $mail->Username = 'rtechcom';
    $mail->Password = '@4rtechSA99%$';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Configurações do email
    $mail->setFrom($_POST['email'], $_POST['name']); 
    $mail->addAddress('adm@4rtech.com.br');

    $mail->isHTML(true);
    $mail->Subject = $_POST['subject'];
    $mail->Body    = $_POST['message'];
    throw('error')
    $mail->send();
    echo 'Mensagem enviada com sucesso!';
} catch (Exception $e) {
    echo "A mensagem não pôde ser enviada. Mailer Error: {$mail->ErrorInfo}";
}
?>
