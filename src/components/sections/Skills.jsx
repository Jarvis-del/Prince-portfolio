import { useSelector } from 'react-redux'
import { selectSkills } from '../../features/portfolio/portfolioSlice'
import Card from '../ui/Card'
import Section from '../ui/Section'

export default function Skills() {
  const skills = useSelector(selectSkills)
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ title, items }) => (
          <Card key={title} className="p-6">
            <h3 className="mb-4 text-lg font-semibold">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((i) => <span key={i} className="chip">{i}</span>)}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
