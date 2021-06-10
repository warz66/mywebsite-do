<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: http://localhost:3000");
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if(($_SERVER['HTTP_REFERER'] === "http://localhost:3000/") || ($_SERVER['HTTP_REFERER'] === "https://mywebsite-do.vercel.app/")) {
    $name = isset($_POST['name']) ? $_POST['name'] : null;
    $email = isset($_POST['email']) ? $_POST['email'] : null;
    $message = isset($_POST['message']) ? $_POST['message'] : null;

    if($name && $email && $message) {
        //Load Composer's autoloader
        require '../../vendor/autoload.php';

        //Instantiation and passing `true` enables exceptions
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->SMTPDebug = 0;
            $mail->isSMTP();                                        //Send using SMTP
            //$mail->Host       = 'localhost';                     //Set the SMTP server to send through
            $mail->Host       = 'smtp.gmail.com'; 
            $mail->SMTPAuth   = true;                            //Enable SMTP authentication
            $mail->Username   = 'david.oeslick@gmail.com';                     //SMTP username
            $mail->Password   = 'sggtybbhuybrqcnh';                      //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );
            //$mail->Port       = 1025;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
            $mail->Port       = 587;

            //Recipients
            $mail->setFrom('warzox@hotmail.com', 'React Form');
            $mail->addAddress($email);           
            $mail->addReplyTo('warzox@hotmail.com', 'Information');

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'React Form';
            $mail->Body    = '<b>Name:</b> ' . $name . '<br />
                              <b>Email:</b> ' . $email . '<br />
                              <b>Message:</b> ' . $message;

            $mail->send();
            //echo 'Message has been sent';
            $arrResult = array ('result'=>'success');
            echo json_encode($arrResult);
        } catch (Exception $e) {
            $arrResult = array ('result'=>'error', 'response'=>$mail->ErrorInfo);
            echo json_encode($arrResult);
            //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        $arrResult = array ('result'=>'error', 'response'=>'Tous les champs doivent être remplis');
        echo json_encode($arrResult);
        //echo "Tous les champs doivent être remplis!";
    }
} else {
    $arrResult = array ('result'=>'error', 'response'=>'Vous ne pouvez pas utiliser ce server.');
    echo json_encode($arrResult);
    //echo "Vous ne pouvez pas utiliser ce server.";
}
