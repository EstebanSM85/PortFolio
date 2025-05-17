<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    $destinatario = "estebansm85@gmail.com";
    $asunto = "Nuevo mensaje de contacto";
    $contenido = "Nombre: $nombre\nCorreo: $email\nMensaje: $mensaje";

    // Enviar correo
    if (mail($destinatario, $asunto, $contenido)) {
        echo "¡Gracias por tu mensaje! Te responderemos pronto.";
    } else {
        echo "Lo sentimos, hubo un error al enviar el mensaje.";
    }
}
?>