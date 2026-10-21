import { useEffect, useRef, useState } from 'react'

/** Returns [ref, inView]. Flips to true once the element scrolls into view. */
export default function useInView(threshold = 0.3) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return setInView(true)
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, { threshold })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [threshold])

  return [ref, inView]
}
