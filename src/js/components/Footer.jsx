export default function Footer() {
  return (
    <footer id="footer" className="bg-dark text-light py-4 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-0">© {new Date().getFullYear()} MiMarca. Todos los derechos reservados.</p>
        <ul className="list-unstyled d-flex mb-0">
          <li className="ms-3"><a className="link-light" href="#">Términos</a></li>
          <li className="ms-3"><a className="link-light" href="#">Privacidad</a></li>
        </ul>
      </div>
    </footer>
  );
}
