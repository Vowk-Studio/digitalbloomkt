<?php
declare(strict_types=1);

$isHttps = !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off';
session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'secure' => $isHttps,
    'httponly' => true,
    'samesite' => 'Lax',
]);
session_start();

header('Content-Type: text/plain; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Método no permitido.';
    exit;
}

if (!empty($_POST['website'] ?? '')) {
    echo 'Consulta enviada con éxito.';
    exit;
}

if (isset($_SESSION['last_submit']) && (time() - (int) $_SESSION['last_submit'] < 30)) {
    http_response_code(429);
    echo 'Por favor, espera 30 segundos antes de enviar otra consulta.';
    exit;
}

function clean_text(string $value, int $maxLength): string
{
    $value = trim(strip_tags($value));
    $value = preg_replace('/[\x00-\x1F\x7F]/u', ' ', $value) ?? '';
    $value = preg_replace('/\s+/u', ' ', $value) ?? '';
    return function_exists('mb_substr') ? mb_substr($value, 0, $maxLength, 'UTF-8') : substr($value, 0, $maxLength);
}

$nombre = clean_text((string) ($_POST['nombre'] ?? ''), 80);
$email = filter_var(trim((string) ($_POST['email'] ?? '')), FILTER_SANITIZE_EMAIL);
$consulta = clean_text((string) ($_POST['consulta'] ?? ''), 1200);

if ($nombre === '' || $consulta === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo 'Datos inválidos. Por favor verifica el formulario.';
    exit;
}

$email = str_replace(["\r", "\n"], '', $email);
$destinatario = 'brendadujovich@gmail.com';
$asuntoNombre = function_exists('mb_substr') ? mb_substr($nombre, 0, 30, 'UTF-8') : substr($nombre, 0, 30);
$asunto = 'Consulta Web DigitalBloomKT - ' . $asuntoNombre;
$mensaje = "Nombre: {$nombre}\nEmail: {$email}\n\nConsulta:\n{$consulta}\n";

$headers = [
    'From' => 'no-reply@digitalbloomkt.com',
    'Reply-To' => $email,
    'Content-Type' => 'text/plain; charset=UTF-8',
];

if (mail($destinatario, $asunto, $mensaje, $headers)) {
    $_SESSION['last_submit'] = time();
    echo 'Consulta enviada con éxito.';
    exit;
}

error_log('Fallo en envío de mail desde el formulario de DigitalBloomKT.');
http_response_code(500);
echo 'Error interno. Intenta más tarde.';
