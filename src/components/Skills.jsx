import SectionTitle from "./SectionTitle";
import { skills } from "../data";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="py-20 mx-auto max-w-7xl px-8" id="skills">
      <SectionTitle text="tech stack"></SectionTitle>
      <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill}></SkillsCard>;
        })}
      </div>
    </section>
  );
};

export default Skills;
