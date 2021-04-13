describe('Quiz Section', () => {
  before(() => {
    cy.visit('')
  })

  describe('Initial state', () => {
    it('should show the first question', () => {
      cy.get('.question-number').should('have.text', 'Question 1 of 20')
    })

    it('should have 4 answers', () => {
      cy.get('button').should('have.length', 4)
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 0%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 100%')
      cy.get('.min-score').should('have.css', 'width', '0px')
      cy.get('.prob-score').should('have.css', 'width', '0px')
      cy.get('.max-score').should('have.css', 'width', '472px')
    })

    it('should not show result message or next question', () => {
      cy.get('.result-message').should('be.empty')
      cy.get('.next-question').should('be.empty')
    })
  })

  describe('Question 1 (incorrect answer)', () => {
    before(() => {
      cy.get('[data-cy=incorrect]').eq(0).click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 0%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show incorrect answer as incorrect', () => {
      cy.get('.result-message').should('have.text', 'Sorry!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 2 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 5%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 3 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 10%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 4 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 15%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 5 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 20%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 6 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 25%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 7 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 30%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 8 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 35%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 9 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 40%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 10 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 45%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 11 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 50%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 12 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 55%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 13 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 60%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 14 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 65%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 15 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 70%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 16 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 75%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 17 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 80%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 18 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 85%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 19 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 90%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Question 20 (correct answer)', () => {
    before(() => {
      cy.get('[data-cy=correct]').click()
    })

    it('should have buttons disabled', () => {
      cy.get('.button').eq(0).should('be.disabled')
      cy.get('.button').eq(1).should('be.disabled')
      cy.get('.button').eq(2).should('be.disabled')
      cy.get('.button').eq(3).should('be.disabled')
    })

    it('should have correct score values', () => {
      cy.get('[data-cy=minPossibleScore]').should('have.text', 'Score: 95%')
      cy.get('[data-cy=maxPossibleScore]').should('have.text', 'Max Score: 95%')
    })

    it('should show correct answer as correct', () => {
      cy.get('.result-message').should('have.text', 'Correct!')
      cy.get('.next-question').find('button').should('have.text', 'Next Question').click()
    })
  })

  describe('Final Result', () => {
    it('should show score', () => {
      cy.get('div.center-screen div').eq(0).should('have.text', 'Your score is: 95 %')
      cy.get('div.center-screen div').eq(1).should('have.text', 'Would you like to restart the quiz?')
      cy.get('div.center-screen button').should('have.text', 'Restart')
    })

    it('should be able to restart quiz', () => {
      cy.get('div.center-screen button').click()
      cy.get('.question-number').should('have.text', 'Question 1 of 20')
    })
  })
})
