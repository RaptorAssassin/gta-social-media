'use client'

import { BatteryFullIcon, WifiIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Phone({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex aspect-390/844 max-h-[85dvh] w-[min(92vw,390px,calc(85dvh*390/844))] shrink-0 flex-col overflow-hidden rounded-[2.5rem] bg-black p-2.5 sm:w-[min(95vw,390px,calc(85dvh*390/844))] sm:rounded-[3rem] sm:p-3">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-4xl bg-white sm:rounded-[2.5rem]">
        <PhoneHeader />
        <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

function PhoneHeader() {
  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    setTime(new Date())

    const interval = setInterval(() => {
      setTime(new Date())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid h-10 shrink-0 grid-cols-[1fr_auto_1fr] items-center gap-2 px-6 pt-1 sm:h-11 sm:px-8 sm:pt-1.5">
      <div className="flex items-center justify-start">
        <span className="text-xs leading-none font-semibold tabular-nums sm:text-[13px]">
          {time?.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          }) ?? '00:00'}
        </span>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-6 w-16 shrink-0 rounded-full bg-black sm:h-7 sm:w-20 md:h-7 md:w-24" />
      </div>

      <div className="flex items-center justify-end gap-1.5 sm:gap-2">
        <WifiIcon className="size-3.5 shrink-0 sm:size-4" strokeWidth={2.25} />
        <BatteryFullIcon
          className="size-4 shrink-0 sm:size-4.5"
          strokeWidth={2.25}
        />
      </div>
    </div>
  )
}
