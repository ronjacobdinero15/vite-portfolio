import { FaFacebookSquare, FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import Reveal from './Reveal'

function Links() {
  return (
    <div className="[&_svg:hover]:text-accent-500 fixed right-10 bottom-0 hidden flex-col items-center gap-2 lg:flex [&_svg]:size-7 [&_svg]:text-stone-100 [&_svg]:transition-colors [&_svg]:duration-100">
      <Reveal>
        <a
          href="https://www.linkedin.com/in/ronjacobdinero/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </Reveal>

      <Reveal>
        <a
          href="https://github.com/ronjacobdinero15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubAlt />
        </a>
      </Reveal>

      <Reveal>
        <a
          href="https://www.facebook.com/ronjacobdinero15/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
      </Reveal>
      <div className="bg-accent-500 h-20 w-0.5" />
    </div>
  )
}
export default Links
