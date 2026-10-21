import { useSelector } from 'react-redux'
import { selectAbout } from '../../features/portfolio/portfolioSlice'
import Card from '../ui/Card'
import Section from '../ui/Section'
import Stat from '../ui/Stat'

export default function About() {
  const { text, stats } = useSelector(selectAbout)
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <p className="max-w-[68ch] text-muted">{text}</p>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <Card key={s.label} className="p-5"><Stat {...s} /></Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
