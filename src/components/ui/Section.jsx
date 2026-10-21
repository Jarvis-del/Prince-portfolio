export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="mb-10 text-3xl font-bold sm:text-4xl">{title}</h2>
      {children}
    </section>
  )
}
