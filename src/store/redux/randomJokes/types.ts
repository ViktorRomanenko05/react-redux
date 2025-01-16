export interface RandomJokesSliceState {
  data: any,
  error: any,
  status: 'default' | 'loading' | 'success' | 'error'
}