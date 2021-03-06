import {
  getButtonClass,
  orderBooleanAnswers,
  shuffleAnswers,
  getAnswersList,
  getPercentageValue
} from './utils'

describe('getPercentageValue function', () => {
  it('returns 0 percent if questions is 0', () => {
    const zeroPercent = getPercentageValue(1, 0)
    expect(zeroPercent).toEqual(0)
  })

  it('returns 90 percent for 9 out of 10', () => {
    const percent90 = getPercentageValue(9, 10)
    expect(percent90).toEqual(90)
  })

  it('return 67 percent for 2 out of 3', () => {
    const percent67 = getPercentageValue(2, 3)
    expect(percent67).toEqual(67)
  })
})

describe('getAnswersList function', () => {
  it('gets answer list from json', () => {
    const questionJson = { incorrect_answers: ['b', 'c', 'd'], correct_answer: 'a' }
    const expectedList = [
      { data: 'a', correct: true },
      { data: 'b', correct: false },
      { data: 'c', correct: false },
      { data: 'd', correct: false }
    ]
    expect(getAnswersList(questionJson)).toEqual(expectedList)
  })
})

describe('shuffleAnswers function', () => {
  it('shuffles list according to order given', () => {
    const answers = ['a', 'b', 'c']
    const order = [2, 0, 1]
    expect(shuffleAnswers(answers, order)).toEqual(['c', 'a', 'b'])
  })

  it('shuffle removes undefined values', () => {
    const answers = ['a', 'b']
    const order = [3, 1, 2, 0]
    expect(shuffleAnswers(answers, order)).toEqual(['b', 'a'])
  })
})

describe('orderBooleanAnswers function', () => {
  it('orders boolean answers', () => {
    const answers = [{ data: 'True', correct: true }, { data: 'False', correct: false }]
    expect(orderBooleanAnswers([...answers])).toEqual(answers)
  })

  it('orders boolean answers', () => {
    const answers = [{ data: 'False', correct: true }, { data: 'True', correct: false }]
    expect(orderBooleanAnswers([...answers])).toEqual([answers[1], answers[0]])
  })
})

describe('getButtonClass function', () => {
  it('returns empty string class when not complete', () => {
    expect(getButtonClass(false, 'a', 'b')).toEqual('')
  })

  it('returns "button-correct" class when complete and correct', () => {
    expect(getButtonClass(true, true, 'b')).toEqual('button-correct')
  })

  it('returns "button-correct" class when complete, incorrect and clicked', () => {
    expect(getButtonClass(true, false, true)).toEqual('button-incorrect')
  })

  it('returns empty string class when complete, incorrect and not clicked', () => {
    expect(getButtonClass(true, false, false)).toEqual('')
  })
})
