import { Header } from '@/components/header'
import { Phone } from '@/components/phone'

export default function Home() {
  return (
    <div className="h-dvh w-full select-none overflow-hidden bg-white">
      <div className="flex h-full w-full items-center justify-center p-4 sm:p-6">
        <Phone>
          <Header />
          <main className=""></main>
        </Phone>
      </div>
    </div>
  )
}
