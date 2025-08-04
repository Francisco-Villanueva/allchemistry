import { WhatsAppIcon } from "./icons/WhatsAppIcon";
export function ContactButton({ phoneNumber }: { phoneNumber: string }) {
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  return (
    <a href={whatsappURL}>
      <WhatsAppIcon />
    </a>
  );
}
