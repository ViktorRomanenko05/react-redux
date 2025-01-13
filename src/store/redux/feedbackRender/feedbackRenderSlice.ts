import { createAppSlice } from "../../createAppSlice"
import type { FeedbackRenderStateSlice } from "./types"
import type { PayloadAction } from "@reduxjs/toolkit"

//создаем пустой массив для хранения id и значений экземпляров элемента
const feedbackRenderInitialState: FeedbackRenderStateSlice = {
  feedbacks: [],
}

export const feedbackRenderSlice = createAppSlice({
  // Задаем имя, под которым будет храниться объект счётчиков отзывов в глобальном стейте
  name: "FEEDBACKRENDER",
  // Создаем объект для хранения начального состояния
  initialState: feedbackRenderInitialState,
  // Создаём объект для хранения редьюсеров
  reducers: create => ({
    //reducer для добавления в глобальный стейт нового экземпляра элемента при его рендеринге
    plusFeedbackElement: create.reducer(
      (state: FeedbackRenderStateSlice, action: PayloadAction<string>) => {
        const foundItem = state.feedbacks.find(
          item => item.id === action.payload,
        )
        if (!foundItem) {
          const newItem = {
            id: action.payload,
            likesCount: 0,
            dislikesCount: 0,
          }
          state.feedbacks = [...state.feedbacks, newItem]
        }
      },
    ),

    //Поиск необходимого экземпляра компонента и добавление к нему лайков
    plusLikes: create.reducer(
      (state: FeedbackRenderStateSlice, action: PayloadAction<string>) => {
        const foundItem = state.feedbacks.find(
          item => item.id === action.payload,
        )
        if (foundItem) {
          foundItem.likesCount += 1
        }
      },
    ),

    //Добавление дизлайков к экземпляру компонента
    plusDisLikes: create.reducer(
      (state: FeedbackRenderStateSlice, action: PayloadAction<string>) => {
        const foundItem = state.feedbacks.find(
          item => item.id === action.payload,
        )
        if (foundItem) {
          foundItem.dislikesCount += 1
        }
      },
    ),
  }),

  // Создаём селекторы позволяющие забрать значение из state в компонент
  selectors: {
    likesCount: (state: FeedbackRenderStateSlice, id: string) => {
      const item = state.feedbacks.find(feedback => feedback.id === id)
      return item ? item.likesCount : 0
    },

    dislikesCount: (state: FeedbackRenderStateSlice, id: string) => {
      const item = state.feedbacks.find(feedback => feedback.id === id)
      return item ? item.dislikesCount : 0
    },
  },
})

export const feedbackRenderActions = feedbackRenderSlice.actions
export const feedbackRenderSelectors = feedbackRenderSlice.selectors
