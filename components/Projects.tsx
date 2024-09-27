"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Project from "./Project";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      id="projects"
      ref={ref}
      className="scroll-mt-16 mb-20 sm:mb-24 pt-14"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My projects
      </h2>
      <div>
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </section>
  );
}
