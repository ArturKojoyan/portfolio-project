"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 pt-14 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-16"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        About me
      </h2>
      <p className="mb-3">
        While learning{" "}
        <span className="font-medium">
          Applied Statistics and Data Science profession
        </span>{" "}
        in the university , I decided to dive deep into Web Development. I
        started with JavaScript then learned NodeJS and ReactJS{" "}
        <span className="italic">My favorite parts of programming</span> are the
        problem-solving and attention to details aspects. I love the feeling of
        finally figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          TypeScript, ReactJS, Express.js, Prisma and PostgreSQL
        </span>
        . I am also familiar with NextJS and NestJS. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Web
        Developer.
      </p>
      <p>
        <span className="italic">
          I am hardworking, organized, responsible, and motivated individual,
          eager to embrace new technologies and challenges.
        </span>
      </p>
      <p>
        When I am not coding, I enjoy watching football and movies, reading
        books and going to the gym. I also enjoy{" "}
        <span className="font-medium">learning new technologies.</span>
      </p>
    </motion.section>
  );
};

export default About;
