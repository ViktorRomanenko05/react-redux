export interface RandomJoke {
  id: string,
  joke: string
}

export interface RandomJokesSliceState {
  data: RandomJoke[],
  error: any,
  status: 'default' | 'loading' | 'success' | 'error'
}