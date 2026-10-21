import { useSelector } from 'react-redux'
import { selectEducation } from '../../features/portfolio/portfolioSlice'
import Card from '../ui/Card'
import Section from '../ui/Section'

export default function Education() {
  const { schools, certifications, achievements } = useSelector(selectEducation)
  return (
    <Section id="education" title="Education & achievements">
      <div className="grid gap-8 lg:grid-cols-2">
        <ol className="space-y-8 border-l border-line pl-6">
          {schools.map(({ name, detail, period }) => (
            <li key={name} className="relative">
              <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-muted">{detail}</p>
              {period && <p className="text-sm text-accent">{period}</p>}
            </li>
          ))}
        </ol>
        <div className="space-y-4">
          <h3 className="font-display text-xl font-bold">Certifications</h3>
          {certifications.map(({ name, issuer }) => (
            <Card key={name} className="px-5 py-4">
              <p className="font-medium">{name}</p>
              <p className="text-sm text-muted">{issuer}</p>
            </Card>
          ))}
          <p className="pt-2 text-muted">{achievements}</p>
        </div>
      </div>
    </Section>
  )
}
