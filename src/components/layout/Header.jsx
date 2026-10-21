import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfile } from '../../features/portfolio/portfolioSlice'
import { selectActiveSection, setActiveSection } from '../../features/ui/uiSlice'

export default function Header() {
  const dispatch = useDispatch()
  const { name, nav } = useSelector(selectProfile)
  const active = useSelector(selectActiveSection)

  // Scroll-spy: keep the Redux `activeSection` in sync with what's on screen.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && dispatch(setActiveSection(e.target.id))),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ;['top', ...nav.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [dispatch, nav])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        <a href="#top" className="font-display text-lg font-bold">{name}</a>
        <nav className="flex gap-5 overflow-x-auto text-sm sm:gap-7" aria-label="Primary">
          {nav.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className="navlink" data-active={active === id}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
