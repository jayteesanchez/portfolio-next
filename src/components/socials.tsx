import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


const Socials = () => {

  return (
    <div className="inline-flex shadow-sm mt-auto mb-5 mx-auto md:mx-0" role="group">
      <a href="https://www.linkedin.com/in/jayteesanchez/" className="scale-200 text-white mr-5 hover:text-violet-300" type="button" aria-label="Link to LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://github.com/jayteesanchez" className="scale-200 text-white mr-5 hover:text-violet-300" type="button" aria-label="Link to Github">
        <FaGithub />
      </a>
      <a href="mailto:jaytee.sanchez@gmail.com?subject=Hello! I came across your site" className="scale-200 text-white mr-5 hover:text-violet-300" type="button" aria-label="Email me">
        <MdOutlineEmail />
      </a>
    </div>
  );
}

export default Socials;