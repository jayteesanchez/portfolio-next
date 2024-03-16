import { FaJava } from "react-icons/fa6";
import { SiRubyonrails, SiNextdotjs, SiExpress, SiTypescript, SiMongodb, SiPostgresql, SiMysql, SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


export default function Home() {
  return (
    <div className="xl:mt-68 lg:mt-40 mt-24">
      <p className="text-2xl">
        hi, I&apos;m
        <b className="hover:motion-safe:animate-pulse"> Jaytee!</b>
      </p>
      <p className="text-base my-8">
        I am a Software Engineer/Developer that loves learning how to make better and faster software.
      </p>
      <p className="text-sm my-2">
        I have extensive experience in full-stack development using languages & tech like: 
      </p>
      <p className="text-sm my-5 ">
        <button type="button" className="scale-200 text-yellow-500 m-4" aria-label="javascript">
          <SiJavascript />
        </button>
        <button type="button" className="scale-200 text-blue-400 m-4" aria-label="ruby">
          <SiTypescript />
        </button>
        <button type="button" className="scale-250 text-orange-600 m-4" aria-label="java">
          <FaJava />
        </button>
        <button type="button" className="scale-250 text-red-700 m-4" aria-label="ruby">
          <SiRubyonrails />
        </button>
        <button type="button" className="scale-250 text-green-300 m-4" aria-label="node.js">
          <FaNodeJs />
        </button>
        <button type="button" className="scale-250 text-white m-4" aria-label="next.js">
          <SiNextdotjs />
        </button>
        <button type="button" className="scale-250 text-white m-4" aria-label="express.js">
          <SiExpress />
        </button>
        <button type="button" className="scale-250 text-green-400 m-4" aria-label="mongoDb">
          <SiMongodb />
        </button>
        <button type="button" className="scale-250 text-blue-500 m-4" aria-label="PostgreSql">
          <SiPostgresql />
        </button>
        <button type="button" className="scale-250 text-white m-4" aria-label="MySql">
          <SiMysql />
        </button>
      </p>
      <p className="text-sm my-2">
        I also bring a strong understanding of software architecture, design patterns, and RESTful APIs.
      </p>
      <p className="text-sm my-2">
        Familiarity with agile development methodologies (Scrum, Kanban) and version control systems (Git)
      </p>
      <p className="text-sm my-2">
        And have led and mentored teams to achieve project goals while significantly contributing to strategic application architecture decisions
      </p>
      <div className="hidden md:block my-10">
        <a href="mailto:jaytee.sanchez@gmail.com?subject=Hello! I came across your site" className=" text-white bg-[#050708] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 hover:motion-safe:animate-bounce" type="button" aria-label="Email me">
          <MdOutlineEmail/>
          <span className="ml-4"> Contact Me </span>
        </a>
      </div>
    </div>
  );
}
