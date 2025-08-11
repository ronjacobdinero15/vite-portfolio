import { HiLink } from 'react-icons/hi2'
import Reveal from './Reveal'
import Text from './Text'

type SectionLinkProps = {
  sectionName: string
  even?: boolean
}

function SectionLink({ sectionName, even = false }: SectionLinkProps) {
  const firstWord = sectionName.split(' ')[0].toLowerCase()

  return (
    <div
      className={`group mb-3 flex items-center gap-2 ${
        even && 'sm:flex-row-reverse'
      }`}
    >
      <div className="after:text-accent-500 flex items-center font-bold tracking-wide text-nowrap capitalize transition-colors after:pb-2.5 after:text-5xl after:content-['.']">
        <Reveal width="w-full">
          <Text size="h1">{sectionName}</Text>
        </Reveal>
      </div>

      <a href={`#${firstWord}`} className="hidden sm:block">
        <HiLink className="text-primary-300 hover:text-accent-500 size-5 cursor-pointer transition-colors duration-100 group-hover:visible sm:invisible" />
      </a>

      <div className="bg-accent-500 h-[1px] w-full rounded-full" />
    </div>
  )
}

export default SectionLink
