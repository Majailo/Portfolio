import "./ProjectCards.scss"

function ProjectCards({ title, description, url, git }) {
  return (
    <div className="card">
      <a href={git} target="_blank" rel="noopener noreferrer">
      <img src={url} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      </a>
    </div>
  );
}

export default ProjectCards;
