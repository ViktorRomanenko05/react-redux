import Input from "../../../components/Input/Input"
import Button from "../../../components/Button/Button"

import { HomePageWrapper, UserForm, UserFormName } from "./styles"
import { useFormik } from "formik"
import { UserFormNames, USER_FORM_VALUES } from "./types"
import { useAppDispatch } from "../../../store/hooks"
import { usersSliceActions } from "../../../store/redux/users/usersSlice"
import { v4 } from 'uuid';

function Home() {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      [USER_FORM_VALUES.USER_NAME]: '',
      [USER_FORM_VALUES.AGE]: '',
      [USER_FORM_VALUES.JOB_TITLE]: '',
    } as UserFormNames,
    onSubmit: (values, {resetForm}) => {
      dispatch(usersSliceActions.addUser({ ...values, id: v4() }));
      resetForm();
    }
  })

  return (
    <HomePageWrapper>
      <UserForm onSubmit={formik.handleSubmit}>
        <UserFormName>Create User</UserFormName>
        <Input
          name={USER_FORM_VALUES.USER_NAME}
          placeholder="Enter fullname"
          value={formik.values[USER_FORM_VALUES.USER_NAME]}
          label="First/Last name"
          onChange={formik.handleChange}
        />
        <Input
          name={USER_FORM_VALUES.AGE}
          placeholder="Enter age"
          value={formik.values[USER_FORM_VALUES.AGE]}
          label="Age"
          onChange={formik.handleChange}
        />
        <Input
          name={USER_FORM_VALUES.JOB_TITLE}
          placeholder="Enter job"
          value={formik.values[USER_FORM_VALUES.JOB_TITLE]}
          label="Job title"
          onChange={formik.handleChange}
        />
        <Button name="Create" type="submit" />
      </UserForm>
    </HomePageWrapper>
  )
}

export default Home