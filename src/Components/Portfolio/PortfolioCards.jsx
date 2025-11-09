import "./ProjectCards.scss"

function PortfolioCards({ title, description, url,svg,git }) {
  return (
    <div className="card">
      <a href={git} target="_blank" rel="noopener noreferrer" >
      <img src={url} alt={title} />
      <h2>{title}</h2>
      <p className="description">{description}</p>
      <p style={{display: "flex" , gap:"15px", justifyContent: "center" }}>{svg}</p>
      </a>
    </div>
  );
}

export default PortfolioCards;
