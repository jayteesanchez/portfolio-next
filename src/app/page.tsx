import { FaJava } from "react-icons/fa6";
import {
  SiRubyonrails,
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiJavascript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="animate-fade-in-up">
      <p className="text-3xl font-light mb-3">
        hi, I&apos;m
        <b className="font-bold hover:motion-safe:animate-pulse"> Jaytee!</b>
      </p>

      <p className="text-base text-gray-300 mb-4">
        Software Engineer who loves building better and faster software.
      </p>

      <p className="text-sm text-gray-400 mb-3">
        Full-stack expertise across:
      </p>

      <div className="flex flex-wrap items-center mb-5">
        <span
          className="scale-150 text-yellow-400 m-3 transition-all duration-200 hover:brightness-150 hover:drop-shadow-[0_0_8px_rgb(250,204,21)] cursor-default"
          aria-label="JavaScript"
        >
          <SiJavascript />
        </span>
        <span
          className="scale-150 text-blue-400 m-3 transition-all duration-200 hover:brightness-150 hover:drop-shadow-[0_0_8px_rgb(96,165,250)] cursor-default"
          aria-label="TypeScript"
        >
          <SiTypescript />
        </span>
        <span
          className="scale-150 text-orange-500 m-3 transition-all duration-200 hover:brightness-150 hover:drop-shadow-[0_0_8px_rgb(249,115,22)] cursor-default"
          aria-label="Java"
        >
          <FaJava />
        </span>
        <span
          className="scale-150 text-red-500 m-3 transition-all duration-200 hover:brightness-150 hover:drop-shadow-[0_0_8px_rgb(239,68,68)] cursor-default"
          aria-label="Ruby on Rails"
        >
          <SiRubyonrails />
        </span>
        <span
          className="scale-150 text-green-400 m-3 transition-all duration-200 hover:brightness-150 hover:drop-shadow-[0_0_8px_rgb(74,222,128)] cursor-default"
          aria-label="Node.js"
        >
          <FaNodeJs />
        </span>
        <span
          className="scale-150 text-white m-3 transition-all duration-200 hover:brightness-150 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] cursor-default"
          aria-label="Next.js"
        >
          <SiNextdotjs />
        </span>
        <span
          className="scale-150 text-gray-300 m-3 transition-all duration-200 hover:brightness-150 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] cursor-default"
          aria-label="Express.js"
        >
          <SiExpress />
        </span>
        <span
          className="scale-150 text-green-500 m-3 transition-all duration-200 hover:brightness-150 hover:drop-shadow-[0_0_8px_rgb(34,197,94)] cursor-default"
          aria-label="MongoDB"
        >
          <SiMongodb />
        </span>
        <span
          className="scale-150 text-blue-500 m-3 transition-all duration-200 hover:brightness-150 hover:drop-shadow-[0_0_8px_rgb(59,130,246)] cursor-default"
          aria-label="PostgreSQL"
        >
          <SiPostgresql />
        </span>
        <span
          className="scale-150 text-sky-400 m-3 transition-all duration-200 hover:brightness-150 hover:drop-shadow-[0_0_8px_rgb(56,189,248)] cursor-default"
          aria-label="MySQL"
        >
          <SiMysql />
        </span>
      </div>

      <p className="text-sm text-gray-400 mb-2">
        Strong background in software architecture, design patterns, RESTful
        APIs, and agile methodologies (Scrum, Kanban).
      </p>
      <p className="text-sm text-gray-400 mb-5">
        Led and mentored teams toward project goals while contributing to
        strategic architecture decisions.
      </p>

      <p className="text-sm text-gray-500 mb-6">Thanks for stopping by!</p>

      <div className="hidden md:block">
        <a
          href="mailto:jaytee.sanchez@gmail.com?subject=Hello! I came across your site"
          className="text-white bg-white/10 border border-white/20 backdrop-blur-sm font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center gap-3 hover:bg-white/20 transition-all duration-200"
          aria-label="Email me"
        >
          <MdOutlineEmail />
          <span>Contact Me</span>
        </a>
      </div>
    </div>
  );
}
