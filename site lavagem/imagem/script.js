// ===============================
// WHATSAPP (formato wa.me: 55 + DDD + número, sem +, sem espaços)
// Número: +55 51 8515-4224  ->  555185154224
// ===============================
const WHATSAPP_NUMBER_E164 = "555185154224";

// Mensagem para os botões "Agendar no WhatsApp" (topo + flutuante + seção)
function buildWhatsappLinkAgendar() {
  const msg = encodeURIComponent(
    "Olá! Gostaria de agendar a Experiência 1977.\n\n" +
    "Veículo:\n" +
    "Preferência de data/turno:"
  );
  return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${msg}`;
}

// Mensagem para o botão "Confirmar no WhatsApp" (após agendar no calendário)
function buildWhatsappLinkConfirmar() {
  const msg = encodeURIComponent(
    "Olá! Acabei de agendar meu horário na Garagem 1977 pelo site e gostaria de confirmar meu atendimento.\n\n" +
    "Nome:\n" +
    "Veículo:\n" +
    "Data e horário:"
  );
  return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${msg}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Botões de agendar
  const linkAgendar = buildWhatsappLinkAgendar();

  ["btnWhatsappTop", "btnWhatsappBooking", "whatsappFloat"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = linkAgendar;
  });

  // Botão de confirmar
  const btnConfirmar = document.getElementById("btnConfirmarWhats");
  if (btnConfirmar) btnConfirmar.href = buildWhatsappLinkConfirmar();
});