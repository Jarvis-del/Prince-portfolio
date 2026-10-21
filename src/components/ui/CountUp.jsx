import { useEffect, useState } from 'react'
import useInView from '../../hooks/useInView'
import { prefersReducedMotion } from '../../hooks/useTyper'

export default function CountUp({ to, suffix = '' }) {
  const [ref, inView] = useInView(0.4)
  const [value, setValue] = useState(0)
  const decimals = Number.isInteger(to) ? 0 : 2

  useEffect(() => {
    if (!inView) return
    if (prefersReducedMotion()) return setValue(to)
    const start = performance.now()
    let raf
    const step = (now) => {
      const p = Math.min((now - start) / 1300, 1)
      setValue(to * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return <span ref={ref}>{value.toFixed(decimals)}{suffix}</span>
}
