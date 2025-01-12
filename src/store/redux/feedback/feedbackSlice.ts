//Импортируем функцию с помощью которой создаем слайс
import { createAppSlice } from "../../createAppSlice"
import { FeedbackStateSlice } from "./types"

const feedbackInitialState: FeedbackStateSlice = {
  likesCount: 0,
  dislikesCount: 0,
}
//Создаём slice для счётчика отзывов
export const feedbackSlice = createAppSlice({
  //Задаем имя, под которым будет храниться объект счетчика отзывов в глобальном стейте
  name: "FEEDBACK",
  //Создаем объект для хранения начального состояния
  initialState: feedbackInitialState,
  //Создаём объект для хранения редьюсеров
  reducers: create => ({
    plusLikes: create.reducer((state: FeedbackStateSlice) => {
      state.likesCount += 1
    }),
    plusDislikes: create.reducer((state: FeedbackStateSlice) => {
      state.dislikesCount += 1
    }),
  }),
  //Создаем селекторы позволяющие забрать значение из state в компонент
  selectors: {
    likesCount: (state: FeedbackStateSlice) => state.likesCount,
    dislikesCount: (state: FeedbackStateSlice) => state.dislikesCount,
  },
})

//Экспорт actions и selectors для использования их в компонентах
export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors
