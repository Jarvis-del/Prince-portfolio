import { useSelector } from 'react-redux'
import photo from '../../assets/photo.webp'
import { selectProfile } from '../../features/portfolio/portfolioSlice'
import useTyper from '../../hooks/useTyper'
import Icon from '../ui/Icon'

const Letters = ({ text, delay = 0 }) =>
  [...text].map((c, i) => (
    <span key={i} className="letter" style={{ animationDelay: `${delay + i * 45}ms` }}>
      {c === ' ' ? '\u00a0' : c}
    </span>
  ))

export default function Hero() {
  const { status, roles, intro, email, links, resume } = useSelector(selectProfile)
  const typed = useTyper(roles)
  const socials = [['GitHub', links.github, 'github'], ['LinkedIn', links.linkedin, 'linkedin'], ['LeetCode', links.leetcode, 'code']]

  return (
    <section id="top" className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-16 md:grid-cols-[1.2fr_.8fr]">
      <div className="orb -top-4 right-4 h-72 w-72 bg-accent/20" />
      <div className="orb bottom-0 left-0 h-64 w-64 bg-accent/10 [animation-delay:-4s]" />

      <div className="rise relative z-10">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-muted">
          <span className="pulse h-2 w-2 rounded-full bg-accent" />
          {status}
        </p>
        <h1 aria-label="Hi, I’m Prince Singh." className="text-5xl font-extrabold leading-[1.02] sm:text-7xl">
          <span aria-hidden="true" className="block"><Letters text="Hi, I’m" /></span>
          <span aria-hidden="true" className="block"><Letters text="Prince Singh." delay={350} /></span>
        </h1>
        <p className="mt-5 min-h-[2.6em] font-display text-2xl font-medium text-muted sm:min-h-[1.3em] sm:text-3xl">
          I build <span className="text-ink">{typed}</span><span className="caret" aria-hidden="true" />
        </p>
        <p className="mt-6 max-w-xl text-muted">{intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary">View projects</a>
          <a href={resume} download="Prince_Singh_Resume.pdf" className="btn btn-ghost"><Icon name="download" /> Download resume</a>
          <a href={`mailto:${email}`} className="btn btn-ghost"><Icon name="mail" /> Email me</a>
        </div>
        <div className="mt-8 flex gap-3">
          {socials.map(([label, href, icon]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="btn btn-ghost !p-3">
              <Icon name={icon} />
            </a>
          ))}
        </div>
      </div>

      <div className="rise photo-bg group relative z-10 w-64 justify-self-center overflow-hidden rounded-[28px] border border-line shadow-[0_30px_80px_-30px_rgb(var(--accent)/.35)] [animation-delay:.15s] sm:w-80">
        <img src={photo} alt="Portrait of Prince Singh" className="aspect-[4/5] w-full object-cover object-top saturate-[.85] transition duration-500 group-hover:scale-105 group-hover:saturate-100" />
      </div>
    </section>
  )
}
