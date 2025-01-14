import { UsersPageWrapper, UserCard, Paragraph } from "./styles"
import { usersSliceActions, usersSliceSelectors } from "../../../store/redux/users/usersSlice"
import { useAppSelector, useAppDispatch } from "../../../store/hooks"
import { v4 } from "uuid";
import { string } from "yup"
import Button from "../../../components/Button/Button"

function Users() {
  const userData = useAppSelector(usersSliceSelectors.users);
  const dispatch = useAppDispatch();

  const userCards = userData.map((user) => {
    return (
      <UserCard key={user.id}>
        <Paragraph>Name: {user.userName}</Paragraph>
        <Paragraph>Age: {user.age}</Paragraph>
        <Paragraph>Job Title: {user.jobTitle}</Paragraph>
        <Button name={"Delete"} onClick={()=>{dispatch(usersSliceActions.deleteUser(user.id))}}/>
      </UserCard>
    )
  })

  return (
    <UsersPageWrapper>
      {userCards}
    </UsersPageWrapper>
  )
}

export default Users