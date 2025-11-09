import "./Resume.css"
import Skills from "./Skills";

function Resume(){
    return (
        <div className="app-resume">
            <h2 className="resume-title">Parcours professionnel</h2>

            <div className="app-resume-intitule">
            <h3>Etudiant en pré-MSC à EPITECH, Montpellier</h3>
            <h4>2025 – Présent </h4>
            </div>
            <p>Formation et apprentissage en algorithmie (Python, JavaScript, Java), développement web, mobile et logiciel, avec introduction à l’IA, à l’UX, à la sécurité, au DevOps et à la transformation digitale, en appliquant des méthodes de travail en mode projet.</p>

            <div className="app-resume-intitule">
            <h3>Chargé d’affaires chimie au pôle chimie primaire à EDF, DT, Saint Denis</h3>
            <h4>2022 - 2025</h4>
            </div>
            <p>Pilotage de la stratégie chimique des sites nucléaires, incluant l’analyse du retour d’expérience, le suivi des risques liés aux produits de fission et l’appui technique aux CNPE. Administration de l’application MERLIN/CAOLIN, avec gestion des incidents et coordination des évolutions fonctionnelles en lien avec les équipes informatiques.</p>
            
            
            <div className="app-resume-intitule">
            <h3>Chargé d’affaires chimie et projets à EDF, CNPE Tricastin</h3>
            <h4>2016 - 2022</h4>
            </div>
            <p>Pilotage de la stratégie chimie lors des arrêts de tranche nucléaires, incluant la planification des activités et la conduite des phases de réalisation en mode projet. Industrialisation des procédés de maintenance et de contrôle chimique via l’outil SDIN. Déclinaison du prescriptif en collaboration avec l’ingénierie site et accompagnement de l’exploitant dans les modifications liées à la chimie. Optimisation des procédures d’arrêt de réacteur sur le thème chimie avec les équipes CDT. Astreinte en responsabilité de la stratégie de prélèvement dans l’environnement, avec rôle de coordinateur technique.</p>


            <div className="app-resume-intitule">
            <h3>Technicien chimiste à EDF-SA, CNPE Tricastin</h3>
            <h4>2010 - 2015</h4>
            </div>
            <p>Préparation et analyse des métaux dans les eaux de rivière et les rejets industriels, avec optimisation du processus de minéralisation des échantillons pour améliorer la fiabilité et la qualité des analyses.</p>

            <div className="app-resume-intitule" >
              <h3>Technicien chimiste à CARSO, Lyon</h3>
              <h4>2008 - 2010</h4>
            </div>
            <p>Préparation et analyse des métaux dans les eaux de rivière et les rejets industriels, avec optimisation du processus de minéralisation des échantillons afin d’améliorer la performance et la fiabilité des contrôles.</p>
            
            <div className="app-resume-intitule">
              <h3>Technicien chimiste à RHODIA, Pont-de-Claix (Isère)</h3>
              <h4>2006 - 2008</h4>
            </div>
              <p>Analyse et fabrication d’intermédiaires pour les mousses polyuréthane, avec optimisation du processus de séparation phase aqueuse/organique afin d’améliorer l’efficacité et la fiabilité du procédé.</p>
           
            <div>
                <h2 className="resume-title">Formation</h2>
            </div>

            <div className="app-resume-intitule">
              <h3>Brevet de Technicien Supérieur chimiste en alternance</h3>
              <h4>2006 - 2008</h4>
            </div>
              
            <div className="app-resume-intitule">
              <h3>BAC STL option chimie laboratoire et procédé industriel</h3>
              <h4>2005</h4>
            </div>
                         
            
            <div>
                <h2 className="resume-title">Skills</h2>
            </div>
            <Skills></Skills>

            <div>
                
            </div>
           </div>



    )



}

export default Resume;