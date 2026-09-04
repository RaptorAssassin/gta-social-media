export type Post = {
  id: string
  caption: string
  imageUrl?: string
  likes: number
  comments: Comment[]
  shares: number
}

export type Comment = {
  id: string
  user: string
  content: string
  timestamp: string
  likes: number
}
