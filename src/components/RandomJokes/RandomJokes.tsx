import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";
import { JokeCard, JokesContainer, RandomJokesWrapper, JokeWrapper, JokeText } from "./styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { randomJokesSliceActions, randomJokesSliceSelectors } from "../../store/redux/randomJokes/randomJokesSlice";
import type { RandomJoke } from "../../store/redux/randomJokes/types";

function RandomJokes() {
  const dispatch = useAppDispatch();
  const { data, error, status } = useAppSelector(randomJokesSliceSelectors.jokeData)

  const getJoke = () => {
    dispatch(randomJokesSliceActions.getJoke())
  }

  const deleteJokes = () => {
    dispatch(randomJokesSliceActions.deleteAllJokes())
  }

  console.log(data);


  const jokes = data.map((joke: RandomJoke) => {
    const deleteJoke = () => {
      dispatch(randomJokesSliceActions.deleteJoke(joke.id))
    }

    return (
      <JokeWrapper key={joke.id}>
        <JokeText>{joke.joke}</JokeText>
        <Button name='x' onClick={deleteJoke} />
      </JokeWrapper>
    )
  })


  return (
    <RandomJokesWrapper>
      <JokeCard>
        <Button name='GET JOKES' onClick={getJoke} />
        {status === 'loading' && <Spinner />}
        <JokesContainer>
          {jokes}
        </JokesContainer>
        <Button name='DELETE JOKES' onClick={deleteJokes} />
      </JokeCard>
    </RandomJokesWrapper>
  )
}

export default RandomJokes;