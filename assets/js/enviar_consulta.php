<?php
session_start();

// 1. Prevención de Cross-Site Request Forgery (CSRF) - Opcional pero recomendado
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo "Método no permitido.";
    exit;
}

// 2. Control de Tasa (Rate Limiting) simple
// Evita que un bot use tu formulario para bombardearte con miles de mails
if (isset($_SESSION['last_submit']) && (time() - $_SESSION['last_submit'] < 30)) {
    echo "Por favor, espera 30 segundos antes de enviar otra consulta.";
    exit;
}

// 3. Sanitización Estricta (Input Validation)
// Limpiamos espacios y caracteres peligrosos
$nombre   = htmlspecialchars(strip_tags(trim($_POST["nombre"] ?? '')), ENT_QUOTES, 'UTF-8');
$email    = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
$consulta = htmlspecialchars(strip_tags(trim($_POST["consulta"] ?? '')), ENT_QUOTES, 'UTF-8');

// 4. Validación de Integridad
if (empty($nombre) || empty($consulta) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Datos inválidos. Por favor verifica el formulario.";
    exit;
}

// 5. Configuración Segura de Headers
$destinatario = "brendadujovich@gmail.com";
$asunto = "Consulta Segura Web - " . mb_substr($nombre, 0, 20); // Limitamos longitud

// Evitamos "Email Header Injection" limpiando saltos de línea en el remitente
$email = str_replace(array("\r", "\n"), '', $email);

$headers = [
    "From" => "no-reply@digitalbloomkt.com",
    "Reply-To" => $email,
    "Content-Type" => "text/plain; charset=UTF-8",
    "X-Content-Type-Options" => "nosniff",
    "X-Frame-Options" => "DENY"
];

// 6. Envío
if (mail($destinatario, $asunto, "Nombre: $nombre\nEmail: $email\n\n$consulta", $headers)) {
    $_SESSION['last_submit'] = time();
    echo "¡Consulta enviada con éxito!";
} else {
    error_log("Fallo en envío de mail desde el formulario."); // Log de error interno
    echo "Error interno. Intenta más tarde.";
}
?>