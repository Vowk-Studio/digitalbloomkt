import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // 1. Validación de Método POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: "Método no permitido." });
  }

  const { email, contenido } = req.body;

  // 2. Sanitización y Validación del Email
  const emailLimpio = typeof email === 'string' ? email.trim() : '';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailLimpio)) {
    return res.status(400).json({ error: "El correo electrónico ingresado no es válido." });
  }

  // 3. Procesamiento del Array de Recursos enviados por el formulario
  const recursosArray = contenido;
  if (!Array.isArray(recursosArray) || recursosArray.length === 0) {
    return res.status(400).json({ error: "No has seleccionado ningún recurso." });
  }

  // Limpiamos y sanitizamos cada recurso seleccionado contra XSS básico
  const recursosLimpios = recursosArray.map(item => 
    String(item).replace(/<[^>]*>?/gm, '').trim()
  );

  // 4. Construcción del cuerpo del mail en texto plano
  let cuerpoMensaje = "Has recibido una nueva solicitud de recursos gratuitos desde la web.\n\n";
  cuerpoMensaje += "Contacto del usuario:\n";
  cuerpoMensaje += "Email: " + emailLimpio + "\n\n";
  cuerpoMensaje += "Materiales seleccionados:\n";

  recursosLimpios.forEach(item => {
    cuerpoMensaje += "- " + item + "\n";
  });

  cuerpoMensaje += "\n--------------------------------------------------\n";
  cuerpoMensaje += "Este correo fue generado automáticamente por el sistema.";

  try {
    // 5. Envío del Correo usando Resend
    const data = await resend.emails.send({
      from: 'Soporte Web <onboarding@resend.dev>', // Puedes cambiarlo a tu dominio verificado en Resend más adelante
      to: ['brendadujovich@gmail.com'],
      subject: 'Nueva solicitud de Contenido Gratuito Web',
      replyTo: emailLimpio,
      text: cuerpoMensaje,
    });

    return res.status(200).json({ success: true, message: "¡Solicitud enviada con éxito! Revisa tu email para acceder a las guías." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor al procesar el envío." });
  }
}