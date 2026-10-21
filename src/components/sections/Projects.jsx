import { useSelector } from 'react-redux'
import { selectProjects } from '../../features/portfolio/portfolioSlice'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import Section from '../ui/Section'

function ProjectCard({ name, role, stack, points, url }) {
  return (
    <Card as="article" className="flex flex-col p-7">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="mb-4 mt-1 text-sm text-accent">{role}</p>
      <ul className="list-disc space-y-3 pl-5 text-[.95rem] text-muted marker:text-accent">
        {points.map((p) => <li key={p}>{p}</li>)}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((s) => <span key={s} className="chip">{s}</span>)}
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-6 self-start">
        <Icon name="github" /> View on GitHub
      </a>
    </Card>
  )
}

export default function Projects() {
  const projects = useSelector(selectProjects)
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.name} {...p} />)}
      </div>
    </Section>
  )
}
