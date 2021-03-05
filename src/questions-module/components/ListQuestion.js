import { arrayOf, func, number, shape, string } from 'prop-types'

import { Flex, Box } from '../../common/styles'
import { Accordion, Button } from '../../common/components'

const ListQuestion = ({ questions, changeQuestion, removeQuestion }) => {
  return (
    <>
      {questions.map((item) => (
        <Flex flexDirection="column" key={item.id} my="0.5rem">
          <Accordion header={item.question} value={item.answer} />
          <Flex>
            <Button
              bgColor="error"
              type="button"
              mr="0.3rem"
              onClick={() => removeQuestion({ id: item.id })}
            >
              Remove question
            </Button>
            <Button type="button" onClick={() => changeQuestion(item)}>
              Edit question
            </Button>
          </Flex>
        </Flex>
      ))}
    </>
  )
}

ListQuestion.defaultProps = {
  changeQuestion: () => {},
  questions: [],
  removeQuestion: () => {},
}

ListQuestion.propTypes = {
  changeQuestion: func.isRequired,
  questions: arrayOf(
    shape({
      id: number,
      question: string,
      answer: string,
      createdAt: string,
      updatedAt: string,
    })
  ),
  removeQuestion: func.isRequired,
}

export default ListQuestion
