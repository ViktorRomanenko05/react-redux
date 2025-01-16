import { FeedbackDisplay, FeedbackWrapper } from "./styles"
import Button from "../Button/Button"
//Импортируем хуки для диспатча и селекторов
import { useAppDispatch, useAppSelector } from "../../store/hooks"
//Импортируем actions и selectors из slice
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "../../store/redux/feedback/feedbackSlice"

function Feedback() {
  //Забираем значения из store
  const likesCount = useAppSelector(feedbackSliceSelectors.likesCount)
  const dislikesCount = useAppSelector(feedbackSliceSelectors.dislikesCount)
  //Сохраняем функцию dispatch
  const dispatch = useAppDispatch()
  const plusLikes = () => {
    dispatch(feedbackSliceActions.plusLikes())
  }
  const plusDislkes = () => {
    dispatch(feedbackSliceActions.plusDislikes())
  }
  return (
    <FeedbackWrapper>
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
        onClick={plusDislkes}
      />
      <FeedbackDisplay>{dislikesCount}</FeedbackDisplay>
    </FeedbackWrapper>
  )
}

export default Feedback
