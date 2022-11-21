Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('Text Box', () => {
  it('Заполнение формы', () => {
    cy.visit('https://demoqa.com/');
    cy.get('h5').contains('Elements').click();
    cy.contains('Text Box').click();
    cy.get('[placeholder="Full Name"]').type('Всеволод Диденко');
    cy.get('[placeholder="name@example.com"]').type('test@test.com');
    cy.get('[placeholder="Current Address"]').type('г. Сызрань, ул. Пушкина, д. Колотушкина, кв. 9');
    cy.get('[id="permanentAddress"]').type('То же');
    cy.get('[id="submit"]').click();
  })
})
describe('Check Box', () => {
  it('Проверка массового открытия и закрытия', () => {
    cy.visit('https://demoqa.com/');
    cy.get('h5').contains('Elements').click();
    cy.contains('Check Box').click();
    cy.get('[title="Expand all"]').click();
    cy.get('[title="Collapse all"]').click();
  })
  it('Проверка последовательного открытия и закрытия', () => {
    
  })
})