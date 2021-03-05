/*eslint-disable*/
import React, { useRef, useState, useEffect } from 'react'
import { func, number, oneOf, oneOfType, shape, string } from 'prop-types'

import { ADD_QUESTION, EDIT_QUESTION } from '../store/constants'
import { Button } from '../../common/components'

import { ButtonGroup, Box, TextField, useMediaQuery, useTheme } from '@material-ui/core'

const FormQuestions = ({
  cancelEdit,
  handleSubmit,
  removeAllQuestions,
  questionToEdit,
}) => {
  const isEditing = !!questionToEdit
  const theme = useTheme()
  const biggerThenSm = useMediaQuery(theme.breakpoints.up('sm'))

  const [inputQuestion, setInputQuestion] = useState(isEditing ? questionToEdit.question : '')
  const [inputAnswer, setInputAnswer] = useState(isEditing ? questionToEdit.answer : '')

  useEffect(() => {
    if(isEditing) {
      setInputQuestion(questionToEdit.question)
      setInputAnswer(questionToEdit.answer) }
  }, [questionToEdit])

  const clearForm = (formElements) => {
    setInputQuestion('')
    setInputAnswer('')
  }

  const handleEditCancellation = () => {
    clearForm()
    cancelEdit()
  }

  const submitForm = (e) => {
    e.preventDefault()
    const type = isEditing ? EDIT_QUESTION : ADD_QUESTION
    const payload = {
      question: inputQuestion.trim(),
      answer: inputAnswer.trim(),
    }

    handleSubmit(type, !isEditing ? payload : { ...questionToEdit, ...payload })
    handleEditCancellation()
  }

  return (
    <form onSubmit={submitForm}>
      <Box display="flex" flexDirection="column">
        <Box mb={1}>
          <TextField fullWidth label="Question" value={inputQuestion} variant="outlined" name="question"
            onChange={(e) => setInputQuestion(e.target.value)}
          />
        </Box>
        <Box>
          <TextField fullWidth multiline label="Answer" value={inputAnswer} variant="outlined" name="answer"
            onChange={(e) => setInputAnswer(e.target.value)}
          />
        </Box>
      </Box>
      <Box display="flex" flexDirection="row-reverse" mt={1}>
        <ButtonGroup disableElevation orientation={!biggerThenSm ? "vertical" : 'horizontal'} variant="contained" color="primary" size="large" fullWidth={!biggerThenSm}>
          <Button mr="0.3rem" type="submit">{isEditing ? 'Edit Question' : 'Create Question'}</Button>
          {isEditing && (
            <Button type="button" mr="0.3rem" onClick={handleEditCancellation}>
              Cancel
            </Button>
          )}
          <Button color="secondary" type="button" onClick={removeAllQuestions}>
            Remove all questions
          </Button>
        </ButtonGroup>
      </Box>
    </form>
  )
}

FormQuestions.defaultProps = {
  cancelEdit: () => {},
  handleSubmit: () => {},
  removeAllQuestions: () => {},
  questionToEdit: null,
}
FormQuestions.propTypes = {
  cancelEdit: func.isRequired,
  handleSubmit: func.isRequired,
  removeAllQuestions: func.isRequired,
  questionToEdit: shape({
    id: number.isRequired,
    question: string.isRequired,
    answer: string.isRequired,
  }),
}

export default FormQuestions
