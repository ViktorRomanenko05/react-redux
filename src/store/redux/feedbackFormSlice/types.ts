export interface FeedbackFormData {
  name: string
  email: string
  id: number
}
export interface FeedbackFormSliceState {
  data: FeedbackFormData[]
  error: any
  status: 'default' | 'loading' |'success' | 'error'
}