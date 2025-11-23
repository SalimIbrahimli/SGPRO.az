<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $name    = trim($_POST["name"]);
    $email   = trim($_POST["email"]);
    $message = trim($_POST["message"]);

    // HANSI EMAILƏ GƏLSİN?  👇 BURANI ÖZÜN DƏYİŞ
    $to = "salimibrahimli87@gmail.com";

    $subject = "Saytdan yeni mesaj (Contact Form)";
    
    $body  = "Ad: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Mesaj:\n" . $message . "\n";

    $headers  = "From: no-reply@yourdomain.com\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mesaj göndərildi! Təşəkkür edirik.";
    } else {
        echo "Xəta baş verdi. Zəhmət olmasa yenidən yoxlayın.";
    }

} else {
    echo "Xətalı sorğu.";
}
?>
