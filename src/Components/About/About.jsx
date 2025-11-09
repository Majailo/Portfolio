import "./About.css"
import Projects from "../ProjectCards/Projects.jsx"

export function About(){
    return (
        <div className="app-about">
            <h2 className="about-title">About me</h2>

            <p>Passionné par la science, la chimie et l’informatique, j’aime comprendre, analyser et améliorer les systèmes qui m’entourent. 
                Curieux et rigoureux, je cherche toujours à simplifier et optimiser les méthodes que j’explore.

            </p>
                <p>Après plusieurs années d’expérience dans le domaine de la chimie nucléaire, où la précision et la rigueur sont essentielles, j’ai choisi en 2025 d’élargir mes horizons en me spécialisant en informatique à travers le programme Pré-MSC d’Epitech. 
                    Cette transition me permet aujourd’hui de relier mes deux univers, la discipline scientifique et le numérique pour concevoir des solutions innovantes et durables.
                </p>

            
            <Projects></Projects>

           </div>


    )



}