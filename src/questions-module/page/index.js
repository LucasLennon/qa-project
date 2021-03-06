import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { REMOVE_QUESTION, REMOVE_ALL_QUESTIONS } from '../store/constants'
import FormQuestions from '../components/FormQuestions'
import ListQuestions from '../components/ListQuestion'
import store from '../../common/store'
import { Button, Tooltip } from '../../common/components'
import useDelay from '../hooks/useDelay'

import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Typography,
} from '@material-ui/core'

const sortQuestions = (a, b) => {
  const aQuestion = a.question.toLowerCase()
  const bQuestion = b.question.toLowerCase()
  if (aQuestion < bQuestion) {
    return -1
  }
  if (aQuestion > bQuestion) {
    return 1
  }
  return 0
}

const App = () => {
  const storedQuestions = useSelector((state) => state.questions)
  const [questionToEdit, setQuestionToEdit] = useState(null)
  const [sorted, setSorted] = useState(false)
  const [delayMessageSubmit, setDelayMessageSubmit] = useState(false)
  const [loading, handleDelayedMethod] = useDelay(5000)

  const questions = useMemo(() => {
    if (sorted) {
      return [...storedQuestions].sort(sortQuestions)
    }
    return storedQuestions
  }, [sorted, storedQuestions])

  // const handleSubmitWithDelay = async (type, payload, delay = 5000) => {
  //   try{

  //   }catch(e){
  //   }
  // }

  const handleSubmit = (type, payload) => {
    if (delayMessageSubmit) {
      handleDelayedMethod(() => store.dispatch({ type, payload }))
    } else {
      store.dispatch({ type, payload })
    }
  }

  const removeQuestion = (payload) => {
    store.dispatch({ type: REMOVE_QUESTION, payload })
  }

  const removeAllQuestions = () => {
    store.dispatch({ type: REMOVE_ALL_QUESTIONS })
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box display="flex">
            <Tooltip content="This area contains the questions already created by the user.">
              <Typography variant="h5">Created Questions</Typography>
            </Tooltip>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container direction="row" justify="flex-end">
            <FormControlLabel
              control={
                <Checkbox
                  checked={delayMessageSubmit}
                  onChange={() => setDelayMessageSubmit(!delayMessageSubmit)}
                />
              }
              label="Add delay"
            />

            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={() => setSorted(true)}
            >
              Sort Questions
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ListQuestions
            changeQuestion={setQuestionToEdit}
            questions={questions}
            removeQuestion={removeQuestion}
          />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex">
            <Tooltip content="Here you create new questions and answers.">
              <Typography variant="h5">Create your Questions</Typography>
            </Tooltip>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <FormQuestions
            isDelayedSubmit={loading}
            cancelEdit={() => setQuestionToEdit(null)}
            handleSubmit={handleSubmit}
            removeAllQuestions={removeAllQuestions}
            questionToEdit={questionToEdit}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
