import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { REMOVE_QUESTION, REMOVE_ALL_QUESTIONS } from '../store/constants'
import ListQuestions from '../components/ListQuestion'
import store from '../../common/store'
import { Button } from '../../common/components'

import { Box, Container, Grid, Typography } from '@material-ui/core'

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
  const [sorted, setSorted] = useState(false)
  const [questionToEdit, setQuestionToEdit] = useState(null)

  const questions = useMemo(() => {
    if (sorted) {
      return [...storedQuestions].sort(sortQuestions)
    }
    return storedQuestions
  }, [sorted, storedQuestions])

  const handleSubmit = (type, payload) => {
    store.dispatch({ type, payload })
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
          <Typography variant="h5">Created Questions</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container direction="row" justify="flex-end">
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
      </Grid>
    </Container>
  )
}

export default App
