const CTA_LINK = "https://chat.whatsapp.com/CSis9rMvlqHGZGMuzgpt23?mode=gi_t";

interface CTAButtonProps {
  text: string;
}

const CTAButton = ({ text }: CTAButtonProps) => {
  return (
    <a
      href={CTA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-cta pulse-glow inline-block"
    >
      {text}
    </a>
  );
};

export default CTAButton;
