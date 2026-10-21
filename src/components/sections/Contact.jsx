import { useSelector } from 'react-redux'
import { selectProfile } from '../../features/portfolio/portfolioSlice'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import Section from '../ui/Section'

export default function Contact() {
  const { email, phone, links, resume } = useSelector(selectProfile)
  return (
    <Section id="contact" title="Let’s work together">
      <Card className="p-8 sm:p-12">
        <p className="max-w-2xl font-display text-2xl font-semibold sm:text-3xl">
          I’m open to internships and full-time roles. Send me a message and I’ll reply soon.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${email}`} className="btn btn-primary"><Icon name="mail" /> {email}</a>
          <a href={resume} download="Prince_Singh_Resume.pdf" className="btn btn-ghost"><Icon name="download" /> Download resume</a>
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="btn btn-ghost"><Icon name="phone" /> {phone}</a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Icon name="linkedin" /> LinkedIn</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Icon name="github" /> GitHub</a>
        </div>
      </Card>
    </Section>
  )
}
