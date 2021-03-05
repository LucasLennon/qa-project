import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { REMOVE_QUESTION, REMOVE_ALL_QUESTIONS } from '../store/constants'
import ListQuestions from '../components/ListQuestion'
import store from '../../common/store'
import Layout from '../../common/layouts/Layout'
import { Flex, Box } from '../../common/styles'
import { Button } from '../../common/components'

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
    <Layout>
      <Flex flexDirection="column" flexGrow={1}>
        <Flex>
          <h3>Created Questions</h3>
          <Box>
            <Button type="button" onClick={() => setSorted(true)}>
              Sort Questions
            </Button>
          </Box>
        </Flex>
        <Box flexGrow={1}>
          <ListQuestions
            changeQuestion={setQuestionToEdit}
            questions={questions}
            removeQuestion={removeQuestion}
          />
        </Box>
      </Flex>
    </Layout>
  )
}

export default App
