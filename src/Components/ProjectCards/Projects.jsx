import ProjectCards from "./ProjectCards";

function Projects() {
  const my_projects = [

    {
      title: 'MEC Me Survive',
      description: 'Jeu de type Brotato développé en Java',
      url: "MEC_Me_Survive.png",
      git: 'https://github.com/Majailo/MEC_Me_Survive'

      
    },

    {
      title: 'Hangman',
      description: 'Jeu du pendu',
      url: "Hangman.gif",
      git: 'https://github.com/Majailo/Python_picsine_Epitech/tree/main/Jour_10'

      
    },
    {
      title: 'NoiseCatcher',
      description: 'Enregistreur audio déclenché par dépassement de seuil en dB, avec horodatage',
      url: "NoiseCatcher.png",
      git: 'https://github.com/Majailo/Noise_Catcher'
    },
    {
      title: 'FindMyJob',
      description: 'Site pour trouver un emploi parmi les offres déposées',
      url: "FindMyJob.png",
      git: 'https://github.com/Majailo/FindMyjob'
      
    },
  ];

  return (
    <>
      <h2 className=" about-title">My Projects</h2>
      <div className="project-main">
        {my_projects.map((project, index) => (
          <ProjectCards
            key={index}
            title={project.title}
            description={project.description}
            url={project.url}
            git={project.git}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
