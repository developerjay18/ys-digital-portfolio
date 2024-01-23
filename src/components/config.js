const config = {
  serviceId: String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
  templateId: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
  publicKey: String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
  googleKey: String(import.meta.env.VITE_GOOGLE_API_SECRET),
};

export { config };
