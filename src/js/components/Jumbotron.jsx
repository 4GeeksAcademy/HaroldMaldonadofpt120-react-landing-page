export default function Jumbotron({ title, subtitle, ctaText, ctaLink }) {
  return (
    <header className="p-5 rounded-3 mb-4 tituloJumbotron">
      <div className="container py-5 text-center">
        <h1 className="display-5 fw-bold">{title}</h1>
        <p className="lead mb-4">{subtitle}</p>
        {ctaText && (
          <a className="btn  btn-lg" href={ctaLink}>
            {ctaText}
          </a>
        )}
      </div>
    </header>
  );
}
