import { Phone } from '@/components/phone'

export default function PhoneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-dvh w-full overflow-hidden bg-white select-none">
      <div className="flex h-full w-full items-center justify-center p-1 sm:p-2">
        <Phone>
          <main className="flex min-h-0 w-full flex-1 flex-col">{children}</main>
        </Phone>
      </div>
    </div>
  )
}
