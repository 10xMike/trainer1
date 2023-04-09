export const Footer = () => {
  return (
    <footer className="py-5 text-center text-md mt-2 opacity-70 bg-sky-600 text-white">
      <p className="flex items-center justify-center gap-16">
        <a
          href="https://www.instagram.com/chiara_elifani_fit_consultant/"
          className="gap-2 flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram <i className="bx bxl-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/chiara.elifani/"
          target="_blank"
          rel="noopener noreferrer"
          className="gap-2 flex items-center"
        >
          Facebook <i className="bx bxl-facebook-circle"></i>
        </a>
      </p>
      <span>
        Chiara Elifani &copy; {new Date().getFullYear()}. Tutti i diritti
        riservati.
      </span>
    </footer>
  );
};
