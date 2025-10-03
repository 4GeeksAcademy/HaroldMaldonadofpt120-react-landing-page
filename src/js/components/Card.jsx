export default function Card({ title, text, img, btnText, btnLink }) {
  return (
    <div className="card h-100 shadow-sm">
      {img && <img src={img} className="card-img-top" alt={title} />}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{text}</p>
        <a href={btnLink} className="btn btn-outline-primary mt-3">
          {btnText}
        </a>
      </div>
    </div>
  );
}
