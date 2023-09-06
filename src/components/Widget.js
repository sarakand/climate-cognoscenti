import Panel from './Panel'

export default function Widget() {
  return (
    <div class="p-8 bg-bgPurple">
      <Panel>
          <div class="bg-white opacity-80 float-right h-64 w-1/2" id="treeFill"></div>
          <div class="bg-[url('/images/tree.png')] bg-repeat-x bg-contain w-[900px] h-64"></div>
      </Panel>
    </div>
  )
}
