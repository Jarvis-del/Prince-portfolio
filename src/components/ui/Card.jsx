/** Surface with a cursor-following spotlight on hover. */
export default function Card({ as: Tag = 'div', className = '', children, ...props }) {
  const spotlight = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <Tag className={`card ${className}`} onMouseMove={spotlight} {...props}>
      {children}
    </Tag>
  )
}
