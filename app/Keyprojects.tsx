import { projectsData } from "./Keyprojectsdata";
import ProjectCard from "./Keyprojectcard";

export default function KeyProjects() {
  return (
    <section className="bg-black px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 제목 */}
        <h2 className="text-[38px] text-white font-thin mb-10 text-left">
          Key Projects</h2>

        {/* 카드 3개 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-5 p-0">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              desc={project.desc}
            />
          ))}
        </div>

        {/* 하단 버튼 */}
        <div className="flex justify-center">
          <div className="bg-white text-black py-2 px-8 rounded-full font-light text-lg gap-3">
            View More Project
          </div>
        </div>
      </div>
    </section>
  );
}