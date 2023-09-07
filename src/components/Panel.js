export default function Panel(props) {
  const { children, className ='' } = props
  return (
    <section class="bg-white shadow-panel text-content rounded-xl">
      <div class={`py-3 px-6 ${className}`}>{children}</div>
    </section>
  )
}
