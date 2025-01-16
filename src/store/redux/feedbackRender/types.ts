export interface FeedbackRenderUnit{
  id: string
  likesCount: number
  dislikesCount: number
}

export interface FeedbackRenderStateSlice{
  feedbacks: FeedbackRenderUnit[]
}