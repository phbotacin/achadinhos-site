const FooterSection = () => {
  return (
    <footer className="bg-foreground py-8 px-4 text-center">
      <p className="text-primary-foreground/60 text-sm">
        © {new Date().getFullYear()} — Achadinhos Shopee. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default FooterSection;
