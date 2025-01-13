import { useState, useEffect } from "react"
import { FeedbackDisplay, FeedbackWrapper } from "./styles"
import Button from "../Button/Button"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { v4 } from "uuid"

import {
  feedbackRenderActions,
  feedbackRenderSelectors,
} from "../../store/redux/feedbackRender/feedbackRenderSlice"

function FeedbackRender() {
  const dispatch = useAppDispatch()
  const [id, setId] = useState("")

  //Определяем функцию добавления нового элемента
  const addNewElement = (newId: string) => {
    dispatch(feedbackRenderActions.plusFeedbackElement(newId))
  }

  //Используем хук useEffect для генерации ID и добавления экземпляра компонента в стейт
  useEffect(() => {
    const newId = v4()
    setId(newId)
    addNewElement(newId)
  }, [])

  //Получаем количество лайков и дизлайков из глобального стейта
  const likesCount = useAppSelector(state =>
    feedbackRenderSelectors.likesCount(state, id),
  )

  const dislikesCount = useAppSelector(state =>
    feedbackRenderSelectors.dislikesCount(state, id),
  )

  //Определяем функции добавления лайков и дизлайков
  const plusLikes = () => {
    dispatch(feedbackRenderActions.plusLikes(id))
  }

  const plusDislikes = () => {
    dispatch(feedbackRenderActions.plusDisLikes(id))
  }

  //Определяем функцию сброса результата
  const resetResult = () => {
    dispatch(feedbackRenderActions.resetResults(id))
  }

  return (
    <FeedbackWrapper key={id}>
      <Button
        name="Like"
        backgroundColor="green"
        icon="src/assets/thumbs/thumbUpBw.png"
        onClick={plusLikes}
      />
      <FeedbackDisplay>{likesCount}</FeedbackDisplay>

      <Button
        name="Dislike"
        backgroundColor="red"
        icon="src/assets/thumbs/thumbDownBw.png"
        onClick={plusDislikes}
      />
      <FeedbackDisplay>{dislikesCount}</FeedbackDisplay>
      <Button
        name="Reset"
        backgroundColor="lightblue"
        onClick={resetResult}
      />
    </FeedbackWrapper>
  )
}

export default FeedbackRender
