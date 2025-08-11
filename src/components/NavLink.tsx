import Reveal from './Reveal'
import Text from './Text'

type NavLinkProps = {
  sectionName: string
  handleToggleMenu: () => void
}

function NavLink({ sectionName, handleToggleMenu }: NavLinkProps) {
  return (
    <li className={`flex h-8 items-center rounded-md`}>
      <Reveal>
        <a
          className={`hover:text-accent-500 w-full tracking-wide transition-colors duration-100 ease-in-out focus:ring-0`}
          href={`#${sectionName.toLowerCase()}`}
          onClick={handleToggleMenu}
        >
          <Text className="font-medium">{sectionName}</Text>
        </a>
      </Reveal>
    </li>
  )
}

export default NavLink
