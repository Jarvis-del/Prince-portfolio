import { useEffect, useState } from 'react'

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Typewriter effect that cycles through `words`. */
export default function useTyper(words, { type = 75, erase = 35, hold = 1500 } = {}) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (prefersReducedMotion()) return setText(words[0])
    let word = 0, len = 0, deleting = false, timer
    const tick = () => {
      len += deleting ? -1 : 1
      setText(words[word].slice(0, len))
      let delay = deleting ? erase : type
      if (!deleting && len === words[word].length) { deleting = true; delay = hold }
      else if (deleting && len === 0) { deleting = false; word = (word + 1) % words.length; delay = 350 }
      timer = setTimeout(tick, delay)
    }
    timer = setTimeout(tick, 900)
    return () => clearTimeout(timer)
  }, [words, type, erase, hold])

  return text
}
