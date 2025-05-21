

<?php
    error_reporting(E_ALL);
ini_set('display_errors', 1);


    $conexion = mysqli_connect("localhost", "root", "p2ssWord", "portfolio");

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}
    // Aquí sigue tu código original
    mysqli_query($conexion, "INSERT INTO contacto(nombre,email,mensaje) VALUES 
                    ('$_POST[nombre]','$_POST[email]', '$_POST[mensaje]')")
    or die("Problemas en el select: " . mysqli_error($conexion));

    mysqli_close($conexion);

    echo "  El mensaje fue enviado.";
?>