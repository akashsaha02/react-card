import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";


const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="1675106890741.jpg" alt="Akash Saha" />;
}

function Intro() {
  return (
    <div>
      <h1>Akash Saha</h1>
      <p>Passionate full-stack web developer fluent in HTML, CSS, and JavaScript. Excels in crafting dynamic user interfaces with React and Angular. Proficient in back-end development using Node.js and Express with databases like MySQL and MongoDB. Eager to make a lasting impact in the web development world.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map(skill=> 
      <Skill 
        skill={skill.skill} 
        color={skill.color}
        level={skill.level}
      />)}
    </div>
  );
}

function Skill({skill, color,level}) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
      {level ==='beginner' && "👶"}
      {level ==='intermediate' && "👍"}
      {level ==='advanced' && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
