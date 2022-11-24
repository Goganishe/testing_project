Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  describe('Text Box', () => {
    it('Тыкаем по радиокнопкам', () => {
      cy.visit('https://demoqa.com/');
      cy.get('h5').contains('Elements').click();
      cy.contains('Radio Button').click();
      cy.get('[for="yesRadio"]').click();
      cy.get('span[class="text-success"]').should('have.text', 'Yes');
    })
  })