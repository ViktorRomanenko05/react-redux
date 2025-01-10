//1. Импортируем функцию, с помощью которой создаём slice
import { createAppSlice } from "../../createAppSlice";
import type { CounterStateSlice } from "./types";

//4.1 Создём объект с первоначальным состоянием, который мы потом передаём в initialState
const counterInitialState: CounterStateSlice = {
  count: 0
}

//2. Создание слайса для каунтера
export const counterSlice = createAppSlice({
  //3. Задаём имя, под которым будет храниться объект со значением каунтера (state) в глобальном стейте
  name: 'COUNTER',
  //4. Задаём объект, в котором будет храниться начальное состояние
  initialState: counterInitialState,
  //5. Создаём объект, внутри которого будут храниться редьюсеры(функции, которые отвечают за изменение состояния)
  reducers: create => ({
    plus: create.reducer((state: CounterStateSlice) => { state.count = state.count + 1 }),
    minus: create.reducer((state: CounterStateSlice) => { state.count = state.count - 1 })
  }),
  //6. Создаём селекторы, которые позволяют забрать данные из стейта в комопнент
  selectors: {
    count: (state: CounterStateSlice) => state.count
  }
});

//7. Экспорт экшенов и селекторов для возможности их использования в компонентах
export const counterSliceActions = counterSlice.actions
export const counterSliceSelectors = counterSlice.selectors