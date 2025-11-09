import "./Skills.css"

function Skills() {
  const skills = [
      { name: 'Python', level: 70 },
      { name: 'SQL', level: 60 },
      { name: 'Java', level: 60 },
      { name: 'PHP', level: 30 },
      { name: 'JavaScript', level: 55 },
      { name: 'CSS/HTML', level: 50 },
      { name: 'Node.js', level: 50 },
      { name: 'React', level: 40 }
  ];

  return (
    <div className="skills-container">
      {/* <h3 className="resume-title">Skills</h3> */}
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar-container">
              <div 
                className="skill-bar-fill" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;