'use client'

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Panel from './Panel'

const questions = [
  {
    label: 'Mode of Customer Journey',
    options: [
      {
        name: 'Online',
      },
      {
        name: 'Telephony',
      },
    ],
  },
  {
    label: 'Mode of Document Signing',
    options: [
      {
        name: 'E-sign',
      },
      {
        name: 'Wet Sign',
      },
    ],
  },
  {
    label: 'Marketing Preference',
    options: [
      {
        name: 'E-mail',
      },
      {
        name: 'Post',
      },
    ],
  },
]

export default function Form() {
  // const [selected, setSelected] = useState(plans[0])

  return (
    <form class="px-8 pb-8 bg-bgPurple">
      <Panel>
        {questions.map(({ options, label }) => (
          <div className="w-full" key={label}>
            <div className="w-full max-w-md py-3">
              <RadioGroup /* value={selected} onChange={setSelected} */>
                <RadioGroup.Label>{label}</RadioGroup.Label>
                <div className="space-y-2">
                  {options.map((option) => (
                    <RadioGroup.Option
                      key={option.name}
                      value={option}
                      className={({ active, checked }) =>
                        `${
                          active
                            ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                            : ''
                        }
                        ${
                          checked
                            ? 'bg-sky-900 bg-opacity-75 text-white'
                            : 'bg-white'
                        }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium  ${
                                    checked ? 'text-white' : 'text-gray-900'
                                  }`}
                                >
                                  {option.name}
                                </RadioGroup.Label>
                              </div>
                            </div>
                            {checked && (
                              <div className="shrink-0 text-white">
                                <CheckIcon className="h-6 w-6" />
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        ))}
      </Panel>
    </form>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
