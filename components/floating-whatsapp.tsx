import { siteConfig, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
      title="WhatsApp the chef"
    >
      <WhatsAppIcon className="h-5 w-5" />
    </a>
  );
}
