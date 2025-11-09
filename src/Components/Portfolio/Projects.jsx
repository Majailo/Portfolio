import PortfolioCards from "./PortfolioCards";
import Github from "../Svg/GitHub";
import Python from "../Svg/Python";
import Html5 from "../Svg/Html5";
import React from "../Svg/React";
import Sql from "../Svg/Sql";
import PostgreSql from "../Svg/PostgreSql";
import Css from "../Svg/Css"


function Projects() {
  const my_projects = [
    {
      title: 'Hangman',
      description: 'Jeu du pendu réalisé dans le cadre d’une piscine à Epitech, en Python avec Pygame. Séparation de la partie graphique et de la partie fonctionnelle. Réalisation 100 % orientée objet pour la partie fonctionnelle.',
      url: "Hangman.gif",
      svg:[<Python/>],
      git: 'https://github.com/Majailo/Python_picsine_Epitech/tree/main/Jour_10'
    },
    {
      title: 'NoiseCatcher',
      description: 'Script de surveillance audio avec déclenchement de l’enregistrement lors du dépassement d’un seuil de décibels. Les enregistrements audio sont stockés en MP3 avec un horodatage dans une base de données SQL comprenant la date, l’heure, la durée et la nomenclature du fichier MP3 enregistré.',
      url: "NoiseCatcher.png",
      svg:[<Python/>, <Sql/> ],
      git: 'https://github.com/Majailo/Noise_Catcher'
    },
    {
      title: 'FindMyJob',
      description: 'Site de recherche d’emploi réalisé dans le cadre d’un projet Epitech. Le site permet la recherche d’offres d’emploi déposées par des entreprises. Un système de comptes avec accès sécurisé par token JWT et cookies est intégré. Possibilité de postuler aux annonces et pour les annonceurs de consulter les candidats.',
      url: "FindMyJob.png",
      svg: [<React/>, <Html5/>,<Css/>,<PostgreSql/>],
      git: 'https://github.com/Majailo/FindMyjob'
    },
  ];

  return (
    <>
      <h2 className=" about-title">My Projects</h2>
      <div className="project-main">
        {my_projects.map((project, index) => (
          <PortfolioCards
            key={index}
            title={project.title}
            description={project.description}
            url={project.url}
            svg={project.svg}
            git={project.git}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
