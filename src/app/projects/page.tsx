export default function Projects() {
  return (
    <div className="animate-fade-in-up w-full">
      <div className="w-full p-5 bg-black/40 border border-white/10 backdrop-blur-sm rounded-xl shadow-lg">
        <h5 className="mb-4 text-lg font-semibold text-white tracking-wide">
          Projects
        </h5>
        <ul className="space-y-3">
          <li>
            <a
              href="http://wegotustoday.com.s3-website-us-west-2.amazonaws.com/"
              className="flex items-start p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
            >
              <span className="flex-1">
                <b className="text-white group-hover:text-violet-300 transition-colors duration-200 underline underline-offset-2">
                  We Got Us Today
                </b>
                <p className="text-xs mt-1 font-normal text-gray-400">
                  Platform to celebrate graduating students during the Covid
                  pandemic.
                </p>
                <p className="italic text-xs mt-1 font-normal text-gray-500">
                  AWS S3 · Route 53 · Cloudflare · JavaScript · jQuery · HTML ·
                  CSS · Bootstrap
                </p>
              </span>
            </a>
          </li>
          <li>
            <a
              href="http://mapeengineering.s3-website-us-west-2.amazonaws.com/"
              className="flex items-start p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
            >
              <span className="flex-1">
                <b className="text-white group-hover:text-violet-300 transition-colors duration-200 underline underline-offset-2">
                  Mape Engineering
                </b>
                <p className="text-xs mt-1 font-normal text-gray-400">
                  Website for a Supplier and Manufacturer for Space &amp;
                  Defense.
                </p>
                <p className="italic text-xs mt-1 font-normal text-gray-500">
                  AWS S3 · Route 53 · Cloudflare · JavaScript · jQuery · HTML ·
                  CSS · Bootstrap
                </p>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://gaggiuino.github.io/#/"
              className="flex items-start p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
            >
              <span className="flex-1">
                <b className="text-white group-hover:text-violet-300 transition-colors duration-200 underline underline-offset-2">
                  Gaggiuino
                </b>
                <p className="text-xs mt-1 font-normal text-gray-400">
                  Fun side project combining microcontrollers and espresso
                  machines.
                </p>
                <p className="italic text-xs mt-1 font-normal text-gray-500">
                  JavaScript · HTML · CSS · Microcontroller programming ·
                  Electronics · Circuit design
                </p>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
