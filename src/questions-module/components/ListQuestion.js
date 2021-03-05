import { arrayOf, func, number, shape, string } from 'prop-types'

import { Accordion, Button } from '../../common/components'
import { Box, ButtonGroup } from '@material-ui/core'
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons'

const ListQuestion = ({ questions, changeQuestion, removeQuestion }) => {
  return (
    <>
      {questions.map((item) => (
        <Box display="flex" flexDirection="column" key={item.id} my="0.5rem">
          <Accordion header={item.question} value={item.answer}>
            <ButtonGroup disableElevation variant="contained" color="primary">
              <Button
                color="secondary"
                type="button"
                mr="0.3rem"
                onClick={() => removeQuestion({ id: item.id })}
              >
                <DeleteIcon />
              </Button>
              <Button type="button" onClick={() => changeQuestion(item)}>
                <EditIcon />
              </Button>
            </ButtonGroup>
          </Accordion>
        </Box>
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
