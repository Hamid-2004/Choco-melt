export const WHATSAPP_NUMBER = "15551234567";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello! I'm interested in ChocoMelt cookies. Could you share more details?";

export function getWhatsAppUrl(message = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppUrl(productName: string) {
  return getWhatsAppUrl(
    `Hello! I'm interested in the ${productName} from ChocoMelt. Could you tell me more?`
  );
}
