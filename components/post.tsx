import { HeartIcon, MessageCircleIcon, SendIcon } from 'lucide-react'
import Image from 'next/image'

export function Post() {
  return (
    <div className="w-full">
      <Image
        className="overflow-hidden rounded-lg object-cover"
        src="/images/example-post.jpg"
        alt="Post Image"
        width={390}
        height={844}
        draggable={false}
      />
      <div className="mt-1 flex gap-3">
        <div className="flex gap-1">
          <button className="">
            <HeartIcon />
          </button>
          <span>123</span>
        </div>
        <div className="flex gap-1">
          <button className="">
            <MessageCircleIcon />
          </button>
          <span>42</span>
        </div>
        <div className="flex gap-1">
          <button className="">
            <SendIcon />
          </button>
          <span>12</span>
        </div>
      </div>
      <div className="mt-1 flex gap-1">
        <span className="font-semibold">Username</span>
        <p>Test Description</p>
      </div>
    </div>
  )
}
