import { Phone } from '@/components/phone'

export default function PhoneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-dvh w-full overflow-hidden bg-white select-none">
      <div className="flex h-full w-full items-center justify-center p-4 sm:p-6">
        <Phone>
          <main className="h-full w-full">{children}</main>
        </Phone>
      </div>
    </div>
  )
}
