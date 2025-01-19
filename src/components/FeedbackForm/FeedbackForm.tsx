import { useFormik } from 'formik'

import Input from '../Input/Input';
import { FeedbackFormContainer, Message } from "./styles"
import Button from '../Button/Button';
import type { FeedbackFormValue} from './types';
import { FEEDBACK_FIELD_NAMES } from './types';
import {feedbackFormSliceActions, feedbackFormSliceSelectors} from "../../store/redux/feedbackFormSlice/feedbackFormSlice"
import { useAppDispatch, useAppSelector } from "../../store/hooks";



function FeedbackForm() {

  const dispatch = useAppDispatch();
  const {error, status} = useAppSelector(feedbackFormSliceSelectors.returnedData);

  const formik = useFormik({
    initialValues: {
      [FEEDBACK_FIELD_NAMES.NAME]: '',
      [FEEDBACK_FIELD_NAMES.EMAIL]: '',
    } as FeedbackFormValue,
    validateOnChange: false,
    onSubmit: (values: FeedbackFormValue) => {
      dispatch(feedbackFormSliceActions.sendData(values))
    }
  })

  return (
    <FeedbackFormContainer onSubmit={formik.handleSubmit}>
      <Input
        name={FEEDBACK_FIELD_NAMES.NAME}
        label='Name'
        placeholder='Enter your name'
        id='name_id'
        value={formik.values[FEEDBACK_FIELD_NAMES.NAME]}
        onChange={formik.handleChange}
      />
      <Input
        name={FEEDBACK_FIELD_NAMES.EMAIL}
        label='Email'
        placeholder='Enter email'
        id='email_id'
        value={formik.values[FEEDBACK_FIELD_NAMES.EMAIL]}
        onChange={formik.handleChange}
      />
      <Button name='SEND' type='submit' />
      {status === "success" && <Message>Data was successfully saved</Message>}
    </FeedbackFormContainer>
  )
}

export default FeedbackForm