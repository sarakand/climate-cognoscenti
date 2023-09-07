export default function Placeholder(props) {
  const { children, className = '' } = props
  return (
    <div class="px-8 pb-8 bg-bgPurple">
      <section class="bg-white shadow-panel text-content rounded-xl">
        <div class={`py-3 px-6 ${className}`}>
            <h1 class="font-semibold mt-8 text-4xl h-96">
                Digital applicaiton here...
            </h1>
        </div>
      </section>
    </div>
  )
}
