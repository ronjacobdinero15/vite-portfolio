export type ProjectType = {
  title: string
  links?: {
    videoLink?: string
    repoLink?: string
    liveLink?: string
  }
  src: string
  description: string
  techs: string[]
}

export type ExperienceType = {
  companyName: string
  employmentType: string
  jobTitle: string
  dateWorked: string
  workedLength: string
  description: string[]
  skillsUsed: string[]
}
