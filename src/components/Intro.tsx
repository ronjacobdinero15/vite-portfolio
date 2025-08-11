import UnderlineIcon from '../assets/images/icons/underline.svg'
import { HiOutlineRocketLaunch } from 'react-icons/hi2'
import { RxExternalLink } from 'react-icons/rx'
import Section from './Section'
import Reveal from './Reveal'
import Text from './Text'
import TextExpander from './TextExpander'
import LinkBtn from './LinkBtn'

function Intro() {
  return (
    <Section className="min-h-dvh items-center space-y-2 pt-5">
      <Reveal>
        <Text size="h3" className="gradient-highlight font-semibold">
          Hello World! I Am
        </Text>
      </Reveal>

      <div className="flex flex-col items-center">
        <Reveal>
          <p className="after:text-accent-500 mb-2 text-center text-5xl font-bold after:text-5xl sm:text-6xl sm:after:text-6xl sm:after:content-['.'] lg:text-7xl lg:after:text-7xl">
            Ron Jacob<span className="hidden sm:inline"> Dinero</span>
          </p>
        </Reveal>

        <Reveal>
          <div className="loader h-14 sm:h-16 lg:h-20">
            <div className="words">
              <span className="word gradient-highlight flex items-center text-center text-5xl font-bold sm:text-6xl lg:text-7xl">
                <span>Full Stack</span>
                {}
                <span className="hidden md:inline"> Developer</span>
              </span>
              <span className="word gradient-highlight flex items-center text-center text-5xl font-bold sm:text-6xl lg:text-7xl">
                <span>UI/UX</span>
                <span className="hidden md:inline"> Designer</span>
              </span>
              <span className="word gradient-highlight text-center text-5xl font-bold sm:text-6xl lg:text-7xl">
                Frontend Developer
              </span>
              <span className="word gradient-highlight flex items-center text-center text-5xl font-bold sm:text-6xl lg:text-7xl">
                <span>Full Stack</span>
                <span className="hidden md:inline"> Developer</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <img
          src={UnderlineIcon}
          className="inline-block h-8 w-auto max-w-full"
          aria-label="underline art"
        />
      </Reveal>

      <Reveal>
        <TextExpander className="my-3 max-w-3xl text-justify text-stone-200 sm:text-center sm:leading-7">
          Hi, I&apos;m Ron &ndash; a passionate Next.js developer and recent
          Computer Science graduate from EAC-Cavite, Philippines. As a
          self-taught developer, I&apos;ve cultivated a deep love for web
          technologies, with Next.js being my framework of choice for building
          modern, scalable applications. I thrive on transforming complex
          problems into elegant solutions and take pride in crafting seamless
          user experiences. Every day brings new learning opportunities, and
          I&apos;m constantly evolving my skills to stay at the forefront of web
          development.
        </TextExpander>
      </Reveal>

      <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center md:gap-6">
        <Reveal width="w-full">
          <LinkBtn href="#contact" className="resumeBtn w-full sm:w-64">
            <Text>Let&apos;s Connect</Text>
            <HiOutlineRocketLaunch className="size-6" />
          </LinkBtn>
        </Reveal>

        <Reveal width="w-full hidden sm:block">
          <LinkBtn
            href="./documents/resume.pdf"
            target="_blank"
            aria-label="My CV"
            rel="noopener noreferrer"
            variant="outline"
            className="flex w-full items-center sm:w-64"
          >
            <Text>My Resume</Text>
            <RxExternalLink className="text-accent-500 size-6 group-hover:text-current" />
          </LinkBtn>
        </Reveal>
      </div>
    </Section>
  )
}
export default Intro
