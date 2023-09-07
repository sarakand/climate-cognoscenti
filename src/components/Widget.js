'use client'
import { useRef, useState } from 'react'
import Panel from './Panel'

export default function Widget() {
  const fillPercentage = useRef(0),
    treeFill = useRef(0),
    [fill, setFill] = useState(50),
    updateTreeFill = () => {
      treeFill.current.style.width = `${fillPercentage.current.value}%`
      setFill(fillPercentage.current.value)
    }
  return (
    <div class="p-8 bg-bgPurple">
      <Panel className="flex w-full">
        <div class="flex-none w-[550px]">
          <div
            className="bg-white opacity-80 float-right h-64"
            ref={treeFill}
            style={{width: "50%"}}
          ></div>
          <div class="bg-[url('/images/tree.png')] bg-repeat-x bg-contain w-[540px] h-64"></div>
        </div>
        <div class="flex-initial">
          <h1 class="font-semibold mt-8 text-2xl">You saved 40kgs of CO2</h1>
          <p class="pt-16">You have also unlocked:</p>
          <ul>
            <li>More free business banking</li>
            <li>A preferential loan rate</li>
          </ul>
        </div>
      </Panel>
        <input
          type="range"
          ref={fillPercentage}
          min="0"
          max="100"
          step="1"
          value={fill}
          onChange={updateTreeFill}
        ></input>
    </div>
  )
}
