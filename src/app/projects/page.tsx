import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    name: "jayteesanchez.com",
    description: "This portfolio site — statically exported Next.js with a serverless resume access flow.",
    tech: ["Next.js", "TypeScript", "AWS S3", "CloudFront", "Lambda", "SES", "Tailwind CSS"],
    href: "https://github.com/jayteesanchez/portfolio-next",
    image: "/githubrepo.png",
    accent: "border-t-orange-500",
    badgeColor: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  },
  {
    name: "We Got Us Today",
    description:
      "Platform to celebrate graduating students during the Covid pandemic.",
    tech: ["AWS S3", "Route 53", "Cloudflare", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap"],
    href: "http://wegotustoday.com.s3-website-us-west-2.amazonaws.com/",
    image: "/wegotustoday.png",
    accent: "border-t-violet-500",
    badgeColor: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  {
    name: "Mape Engineering",
    description: "Website for a Supplier and Manufacturer for Space & Defense.",
    tech: ["AWS S3", "Route 53", "Cloudflare", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap"],
    href: "http://mapeengineering.s3-website-us-west-2.amazonaws.com/",
    image: "/mapeengineering.png",
    accent: "border-t-sky-500",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  },
  {
    name: "Gaggiuino",
    description: "Fun side project combining microcontrollers and espresso machines.",
    tech: ["JavaScript", "HTML", "CSS", "Microcontrollers", "Electronics", "Circuit design"],
    href: "https://gaggiuino.github.io/#/",
    image: "/gaggiuino.png",
    accent: "border-t-emerald-500",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
];

export default function Projects() {
  return (
    <div className="animate-fade-in-up w-full">
      <div className="w-full p-5 bg-black/40 border border-white/10 backdrop-blur-sm rounded-xl shadow-lg">
        <h5 className="mb-4 text-lg font-semibold text-white tracking-wide">
          Projects
        </h5>
        <ul className="space-y-3">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 border-t-2 ${project.accent} hover:bg-white/10 hover:border-white/20 transition-all duration-200 group`}
              >
                <span className="flex-1 min-w-0">
                  <span className="flex items-center justify-between gap-2 mb-1">
                    <b className="text-white group-hover:text-violet-300 transition-colors duration-200">
                      {project.name}
                    </b>
                    <FiExternalLink className="shrink-0 text-gray-500 group-hover:text-violet-300 transition-colors duration-200" />
                  </span>
                  <p className="text-xs font-normal text-gray-400 mb-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`border text-xs px-2 py-0.5 rounded-full ${project.badgeColor}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </span>
                <div className="shrink-0 w-20 h-16 rounded-md overflow-hidden border border-white/10 bg-black/30 hidden sm:block">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={80}
                    height={64}
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
