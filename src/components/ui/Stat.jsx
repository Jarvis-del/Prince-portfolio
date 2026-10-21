import CountUp from './CountUp'

export default function Stat({ value, suffix, label }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold text-accent"><CountUp to={value} suffix={suffix} /></div>
      <div className="text-sm text-muted">{label}</div>
    </div>
  )
}
