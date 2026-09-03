import { Feed } from '@/components/feed'
import { Header } from '@/components/header'
import { Phone } from '@/components/phone'
import { Post } from '@/components/post'

export default function Home() {
  return (
    <div className="h-dvh w-full overflow-hidden bg-white select-none">
      <div className="flex h-full w-full items-center justify-center p-4 sm:p-6">
        <Phone>
          <main className="h-full w-full">
            <Feed />
          </main>
        </Phone>
      </div>
    </div>
  )
}
