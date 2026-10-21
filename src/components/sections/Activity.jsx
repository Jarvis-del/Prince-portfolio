import { useSelector } from 'react-redux'
import { selectActivity, selectProfile } from '../../features/portfolio/portfolioSlice'
import useInView from '../../hooks/useInView'
import Card from '../ui/Card'
import Section from '../ui/Section'
import Stat from '../ui/Stat'

function CardHeader({ title, href }) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h3 className="text-xl font-bold">{title}</h3>
      <a href={href} target="_blank" rel="noopener noreferrer" className="navlink text-sm">Open profile</a>
    </div>
  )
}

function TopicBars({ topics }) {
  const [ref, inView] = useInView()
  const max = Math.max(...topics.map(([, n]) => n))
  return (
    <div ref={ref} className="space-y-3">
      {topics.map(([name, count]) => (
        <div key={name}>
          <div className="mb-1 flex justify-between text-sm">
            <span>{name}</span><span className="text-muted">{count} solved</span>
          </div>
          <div className="rounded-full bg-line"><div className="bar" style={{ width: inView ? `${(count / max) * 100}%` : 0 }} /></div>
        </div>
      ))}
    </div>
  )
}

function LeetCodeCard({ data, href }) {
  return (
    <Card className="p-7">
      <CardHeader title="LeetCode (Ultron17)" href={href} />
      <div className="mb-8 grid grid-cols-3 gap-4">{data.stats.map((s) => <Stat key={s.label} {...s} />)}</div>
      <p className="mb-4 text-sm text-muted">Most-solved topics</p>
      <TopicBars topics={data.topics} />
    </Card>
  )
}

function GitHubCard({ data, href }) {
  return (
    <Card className="p-7">
      <CardHeader title="GitHub (Jarvis-del)" href={href} />
      <div className="mb-6 grid grid-cols-3 gap-4">{data.stats.map((s) => <Stat key={s.label} {...s} />)}</div>
      <div className="space-y-3">
        {data.repos.map(({ name, description, language, url }) => (
          <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="repo">
            <div className="flex items-center justify-between gap-3">
              <span className="font-medium">{name}</span>
              <span className="chip !py-0">{language}</span>
            </div>
            <p className="text-sm text-muted">{description}</p>
          </a>
        ))}
      </div>
    </Card>
  )
}

export default function Activity() {
  const { leetcode, github, snapshotDate } = useSelector(selectActivity)
  const { links } = useSelector(selectProfile)
  return (
    <Section id="activity" title="Coding activity">
      <div className="grid gap-6 lg:grid-cols-2">
        <LeetCodeCard data={leetcode} href={links.leetcode} />
        <GitHubCard data={github} href={links.github} />
      </div>
      <p className="mt-6 text-sm text-muted">Numbers are a snapshot from {snapshotDate}. Open the profiles for live figures.</p>
    </Section>
  )
}
