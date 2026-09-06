import Image from 'next/image'
import { Sidebar } from './sidebar'
import { BottomNav } from './bottom-nav'

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-dvh">
      {/* Full-screen background — mobile vs wide */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Mobile background */}
        <Image
          src="/images/background-mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />
        {/* Wide background */}
        <Image
          src="/images/background-wide.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center md:block"
        />
      </div>

      {/* Layout: feed always centered, sidebar left of it */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-0 md:px-4">
        <div className="flex justify-center gap-6 xl:relative xl:block">
          {/* md → xl: sidebar as flex item, group centered */}
          <div className="hidden md:block xl:hidden w-[220px] shrink-0">
            <div className="sticky top-6 pt-6">
              <Sidebar />
            </div>
          </div>

          {/* xl+: sidebar absolutely positioned left of centered feed (feed viewport-centered) */}
          <div className="hidden xl:block absolute left-[calc(50%_-_544px)] top-6 w-[220px]">
            <Sidebar />
          </div>

          <main className="flex min-h-dvh w-full min-w-0 max-w-[600px] flex-1 flex-col pb-[72px] md:pb-0 mx-auto md:mx-0 xl:mx-auto xl:flex-none px-2 md:px-0">
            {children}
          </main>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
