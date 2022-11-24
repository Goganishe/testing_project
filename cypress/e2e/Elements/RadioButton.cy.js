Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Text Box', () => {
    it('Переход в нужный раздел', () => {
        cy.visit('https://demoqa.com/');
        cy.get('h5').contains('Elements').click();
        cy.contains('Radio Button').click();
    })
    it('Тыкаем по первой радиокнопке', () => {
        cy.get('[for="yesRadio"]').click();
        cy.get('span[class="text-success"]').should('have.text', 'Yes');
    })
    it('Тыкаем по второй радиокнопке', () => {
        cy.get('[for="impressiveRadio"]').click();
        cy.get('span[class="text-success"]').should('have.text', 'Impressive');
    })
    it('Тыкаем по третьей радиокнопке', () => {
        cy.get('[for="noRadio"]').click();
        cy.get('[for="noRadio"]').should('have.class', 'disabled');
    })
})